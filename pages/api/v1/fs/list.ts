// This is an example of to protect an API route
import { getSession } from "next-auth/react"
import type { NextApiRequest, NextApiResponse } from "next"

import nextConnect from 'next-connect';
import multer from 'multer';
import next from "next";
import fs from 'fs';
import path from 'path';

export const apiRoute = nextConnect({
  onError(error, req: NextApiRequest, res: NextApiResponse) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req: NextApiRequest, res: NextApiResponse) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.post(async (req: NextApiRequest, res: NextApiResponse) => {

  // await getBody(req, res);

  // console.log(req);
  console.log('body', req.body);
  // console.log('cookies', req.cookies);
  // console.log('query', req.query);
  // console.log('method', req.method); // POST

  const reqPath = `./public/uploads/${req.body.path ?? ''}`;

  const result: string[] = [];

  // fs.readdir(reqPath, (err, files) => {
  //   files.forEach(file => {
  //     console.log(file);
  //     result.push(file);
  //   });
  // });

  try {

    fs.readdirSync(reqPath).forEach(file => {
      // console.log(file);
      result.push(file);
    });
    res.status(200).json({ data: 'success', path: reqPath, result: result });
  } catch (e) {
    res.status(200).json({ data: 'success', path: reqPath, error: e });
  }


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
  },
};