// This is an example of to protect an API route
import { getSession } from "next-auth/react"
import type { NextApiRequest, NextApiResponse } from "next"

import nextConnect from 'next-connect';
import next from "next";
import fs from 'fs';
import path from 'path';

// var { S3Client } = require('@aws-sdk/client-s3');
// import entire SDK
import AWS from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";

// REGION
const endpoint = 'fra1.digitaloceanspaces.com';
// BUCKET_NAME
const bucket = 'orlinzer';

// Set S3 endpoint to DigitalOcean Spaces
const spacesEndpoint = new AWS.Endpoint(endpoint);
const s3Client = new S3Client({
  region: endpoint,
  // endpoint: spacesEndpoint
});

export const deleteFile = async (filename: string) => {
  try {
    const data = await s3Client.send(new DeleteObjectCommand({
      Bucket: bucket,
      Key: filename,
    }));
    console.log("Success. Object deleted.", data);
    return { message: `Success. Object deleted ${data}` };
    // return data; // For unit tests.
  } catch (err) {
    console.log("Error", err);
    return { error: `Error. ${err}` };
  }
};

export const apiRoute = nextConnect({
  onError(error, req: NextApiRequest, res: NextApiResponse) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req: NextApiRequest, res: NextApiResponse) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

// Returns middleware that processes multiple files sharing the same field name.
// export const uploadMiddleware = upload.array('theFiles');

// Adds the middleware to Next-Connect
// apiRoute.use(uploadMiddleware);




// const getBody = util.promisify(bodyParser.urlencoded());

apiRoute.post(async (req: NextApiRequest, res: NextApiResponse) => {

  const result = await deleteFile(req.body.path);

  return res.status(result.error ? 400 : 200).json(result);

  // await getBody(req, res);

  // console.log(req);
  // console.log('body', req.body);
  // console.log('cookies', req.cookies);
  // console.log('query', req.query);
  // console.log('method', req.method); // POST

  // const reqPath = `./public/uploads/${req.body.path}`;

  // try {
  //   const exist = fs.existsSync(reqPath);
  //   // fs.unlinkSync(reqPath)
  //   res.status(200).json({ data: 'success', path: reqPath, exist: exist });
  // } catch (e) {
  //   res.status(200).json({ data: 'success', path: reqPath, error: e });
  // }
});

export default apiRoute;

export const config = {
  api: {
    // bodyParser: false, // Disallow body parsing, consume as stream
    bodyParser: true, // Disallow body parsing, consume as stream
    // bodyParser: {
    //   // sizeLimit: '500kb',
    //   sizeLimit: '1mb',
    // },
    // responseLimit: '8mb',
    // responseLimit: '8mb',
  },
};

// export const remove = multer({
  // storage: multerS3({

  // })
  // storage: multer.diskStorage({
  //   destination: './public/delete',
  //   filename: (req, file, cb) => cb(null, file.originalname),
  // }),
// });
