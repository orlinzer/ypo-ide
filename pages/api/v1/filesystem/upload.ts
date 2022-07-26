// This is an example of to protect an API route
import { getSession } from "next-auth/react"
// import type { NextApiRequest, NextApiResponse } from "next"
import { NextApiRequest, NextApiResponse } from "next"

import nextConnect from 'next-connect';

import Cors from 'cors';

// var { S3Client } = require('@aws-sdk/client-s3');
// import entire SDK
import AWS from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { Request, ParamsDictionary, Response } from "express-serve-static-core";
import { ParsedQs } from "qs";
// // import individual service
// import S3 from 'aws-sdk/clients/s3';

const REGION = 'fra1';
const BUCKET = 'orlinzer';

const s3Client = new S3Client({
  endpoint: `https://${REGION}.digitaloceanspaces.com`, // Find your endpoint in the control panel, under Settings. Prepend "https://".
  region: `${REGION}`, // Must be "us-east-1" when creating new Spaces. Otherwise, use the region in your endpoint (e.g. nyc3).
  // credentials: {
  //   accessKeyId: "C58A976M583E23R1O00N", // Access key pair. You can create access key pairs using the control panel or API.
  //   secretAccessKey: process.env.SPACES_SECRET // Secret access key defined through an environment variable.
  // }
});

// Change bucket property to your Space name
export const upload = multer({
  storage: multerS3({
    s3: s3Client,
    bucket: BUCKET,
    acl: 'public-read',
    // metadata: function (req, file, cb) {
    //   cb(null, {fieldName: file.fieldname});
    // },
    key: function (request, file, cb) {
      console.log(file);
      cb(null, file.originalname);
    }
  })
  // }).array('upload');
}).array('upload', 1);

// // Returns a Multer instance that provides several methods for generating
// // middleware that process files uploaded in multipart/form-data format.
// export const upload = multer({
//   storage: multer.diskStorage({
//     destination: './public/uploads',
//     filename: (req, file, cb) => cb(null, file.originalname),
//   }),
// });
// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
// function runMiddlewareLoading(req, res, fun) {
// upload(req, res, function (error) {
//   if (error) {
//     console.log(error);
//     return res.status(400).json({ data: 'error' });
//   }
//   console.log('File uploaded successfully.');
//   res.status(200).json({ data: 'success' });
// });
//   return new Promise((resolve, reject) => {
//     fun(req, res, result => {
//       if (result instanceof Error) {
//         return reject(result)
//       }
//       return resolve(result)
//     })
//   })
// }

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'POST', 'HEAD'],
});

export const apiRoute = nextConnect({
  onNoMatch(req: NextApiRequest, res: NextApiResponse) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
  onError(error, req: NextApiRequest, res: NextApiResponse) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
});

// // Returns middleware that processes multiple files sharing the same field name.
// export const uploadMiddleware = upload.array('theFiles');

// // Adds the middleware to Next-Connect
// apiRoute.use(uploadMiddleware);

// Adds the middleware to Next-Connect
// apiRoute.use(upload);

// res.status(200).json({ data: 'success' });
// Run the middleware
// await runMiddlewareLoading(req, res, cors);
// await runMiddlewareLoading(req, res, upload);
apiRoute.post(async (req: NextApiRequest & Request, res: NextApiResponse & Response) => {
  return upload(req, res, function (error) {
    if (error) {
      console.log(error);
      return res.status(400).json({ data: 'error' });
    }
    console.log('File uploaded successfully.');
    return res.status(200).json({ data: 'success' });
  });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
    // bodyParser: {
    //   sizeLimit: '1mb',
    //   sizeLimit: '500kb',
    // },
    // externalResolver: true,
    // responseLimit: false,
    // responseLimit: '8mb',
  },
};
