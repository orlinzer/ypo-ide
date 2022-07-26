// This is an example of to protect an API route
import { getSession } from "next-auth/react"
import type { NextApiRequest, NextApiResponse } from "next"

import nextConnect from 'next-connect';

import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";

// TODO: move to environment variables
const REGION = 'fra1';
const BUCKET = 'orlinzer';
const ENDPOINT = `https://${REGION}.digitaloceanspaces.com`;

// Create S3 client instance
const s3Client = new S3Client({
  endpoint: ENDPOINT, // Find your endpoint in the control panel, under Settings. Prepend "https://".
  region: REGION, // Must be "us-east-1" when creating new Spaces. Otherwise, use the region in your endpoint (e.g. nyc3).
  // credentials: {
  //   accessKeyId: "C58A976M583E23R1O00N", // Access key pair. You can create access key pairs using the control panel or API.
  //   secretAccessKey: process.env.SPACES_SECRET // Secret access key defined through an environment variable.
  // }
});

/**
 * List the content of a directory
 *
 * @param path A path of the root directory to list its content
 * @returns A promise to give a list of the given directory or the root content
 */
export const listSpacesContent = async (path?: string) => {

  try {
    const data = await s3Client.send(new ListObjectsCommand({
      Bucket: BUCKET,
      Prefix: path,
    }));

    console.log("Success", data);

    // return { result: data };
    return data.Contents?.map(content => ({
      name: content.Key,
      lastModified: content.LastModified,
      size: content.Size,
    }));

  } catch (error) {
    console.log("Error", error);
    // return { error: err };
    // TODO: handle
    throw new Error(JSON.stringify(error));
  }
}

export default listSpacesContent;
