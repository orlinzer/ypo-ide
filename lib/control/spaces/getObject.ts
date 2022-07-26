// This is an example of to protect an API route
import { getSession } from "next-auth/react"
import type { NextApiRequest, NextApiResponse } from "next"

import nextConnect from 'next-connect';

import { S3Client, ListObjectsCommand, GetObjectCommand, S3ClientConfig } from "@aws-sdk/client-s3";

const REGION = process.env.SPACES_REGION;
const BUCKET = process.env.SPACES_BUCKET;
const ENDPOINT = process.env.SPACES_ENDPOINT;
const aCCESS_KEY_ID = process.env.SPACES_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = process.env.SPACES_SECRET_ACCESS_KEY;

/**
 * Get the content of an object
 *
 * @param path A path to the object
 * @returns A promise to give a object's content
 */
export const getObject = async (path: string) => {

  // console.log(path); // DBG

  try {
    const s3ClientConfig: S3ClientConfig = {
      endpoint: ENDPOINT, // Find your endpoint in the control panel, under Settings. Prepend "https://".
      region: REGION, // Must be "us-east-1" when creating new Spaces. Otherwise, use the region in your endpoint (e.g. nyc3).
      // credentials: {
      //   accessKeyId: aCCESS_KEY_ID, // Access key pair. You can create access key pairs using the control panel or API.
      //   secretAccessKey: SECRET_ACCESS_KEY // Secret access key defined through an environment variable.
      // }
    };

    // Create S3 client instance
    const s3Client = new S3Client(s3ClientConfig);

    const s3CommandInput = {
      Bucket: BUCKET,
      Key: path,
    };

    // Create S3 command instance
    const s3Command = new GetObjectCommand(s3CommandInput);

    // Send s3 command
    const data = await s3Client.send(s3Command);

    // console.log("Success", data.); // DBG

    // return { result: data };
    return data;
    // return data.Contents?.map(content => ({
    //   name: content.Key,
    //   lastModified: content.LastModified,
    //   size: content.Size,
    // }));

  } catch (error) {
    if (error instanceof Error) {
      console.error('name', error.name);
      console.error('message', error.message);
      console.error('stack', error.stack);
      console.error('cause', error.cause);
    }
    // console.log(JSON.stringify(error));

    console.error(error);
    // return { error: err };
    // TODO: handle
    throw new Error(JSON.stringify(error));
  }
}

export default getObject;
