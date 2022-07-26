// This is an example of to protect an API route
import type { NextApiRequest, NextApiResponse } from "next"

import { getSession } from "next-auth/react"
import nextConnect from 'next-connect';
import Cors from 'cors';

import getObject from "../../../../lib/control/spaces/getObject";


// Define the cors configurations
const corsConfig = {
  origin: '*',
  methods: [
    'GET', // Get a representation of the target resource’s state. Returns a representational view of a resource's contents and data. GET should be used in read-only mode.
    'HEAD', // requests the headers that would be returned if the HEAD request's URL was instead requested with the HTTP GET method.
    'PUT', // updates a resource by replacing its content entirely. Create or replace the state of the target resource with the state defined by the representation enclosed in the request.
    'PATCH', // used to update resources. As opposed to replacing resources, like the PUT method does, PATCH only modifies resource contents. As a general rule, these modifications should be expressed in a standard format like JSON or XML. Partially update resource’s state.
    'POST', // applying POST to the parent resource prompts it to create a new resource. Let the target resource process the representation enclosed in the request.
    'DELETE', // When a DELETE method targets a single resource, that resource is removed entirely. Delete the target resource’s state.
  ],
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

// Initializing the cors middleware
const cors = Cors(corsConfig);


// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: { (req: NextApiRequest, res: NextApiResponse<any>, next: (err?: any) => any): void; (arg0: NextApiRequest, arg1: NextApiResponse<any>, arg2: (result: any) => void): void; }) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
}

export const apiRoute = nextConnect({
  onError(error, req: NextApiRequest, res: NextApiResponse) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req: NextApiRequest, res: NextApiResponse) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});


/**
 * Handle a POST request for listing a directory content
 */
apiRoute.post(async (req: NextApiRequest, res: NextApiResponse) => {

  // Run the middleware
  await runMiddleware(req, res, cors);

  // console.log(req?.body?.path); // DBG

  try {
    const result = await getObject(req?.body?.path);
    console.log(result); // DBG
    return res.status(200).send(result.Body);
    return res.status(200).json({ result: result });;

  } catch (error) {
    return res.status(400).json({ error: error });
  } finally {
    // TODO
  }

});

// API Route Config
export const config = {
  api: {
    // bodyParser: false, // Disallow body parsing, consume as stream
    bodyParser: true, // Disallow body parsing, consume as stream
    // bodyParser: {
    //   // sizeLimit: '500kb',
    //   sizeLimit: '1mb',
    // },
    // responseLimit: false,
    // responseLimit: '8mb',
    // externalResolver: true,
  },
};


export default apiRoute;
