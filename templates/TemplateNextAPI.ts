
import Cors from 'cors';
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";


// Define the cors configurations
const corsConfig = {
  origin: '*',
  methods: [
    'GET',
    'HEAD',
    'PUT',
    'PATCH',
    'POST',
    'DELETE',
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
  res: NextApiResponse<any>,
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

/**
 *
 * @param req The client's Request for the API
 * @param res The response to send to the client
 *
 * @returns
 */
export const TemplateNextAPIHandler: NextApiHandler = async (req, res) => {

  // Run the middleware
  await runMiddleware(req, res, cors);

  // Handle request methods
  if (req.method === 'CONNECT') {
    // TODO Starts two-way communications with the requested resource. It can be used to open a tunnel.
  } else if (req.method === 'DELETE') {
    // TODO Deletes the specified resource.
  } else if (req.method === 'GET') {
    // TODO A representation of the specified resource.
    //      Requests using GET should only be used to request data (they shouldn't include data).
  } else if (req.method === 'HEAD') {
    // TODO The headers that would be returned if the HEAD request's URL was instead requested with the HTTP GET method.
    //      For example, if a URL might produce a large download,
    //      a HEAD request could read its Content-Length header to check the filesize without actually downloading the file.
  } else if (req.method === 'OPTIONS') {
    // TODO Permitted communication options for a given URL or server.
    //      A client can specify a URL with this method, or an asterisk (*) to refer to the entire server
  } else if (req.method === 'PATCH') {
    // TODO Applies partial modifications to a resource
  } else if (req.method === 'POST') {
    // TODO Sends data to the server. The type of the body of the request is indicated by the Content-Type header
  } else if (req.method === 'PUT') {
    // TODO Creates a new resource or replaces a representation of the target resource with the request payload
  } else if (req.method === 'TRACE') {
    // TODO Performs a message loop-back test along the path to the target resource, providing a useful debugging mechanism
  } else {
    // Return error request method is not supported
    res.status(501).json({
      error: `The request method ${req.method} is not supported by the server and cannot be handled`,
    })
    return;
  }

  // Get the Query of the request
  // the query in the URL
  const {
    // For example, the API route pages/api/post/[pid].js or pages/api/post/[...pid].js has the following code:
    pid
  } = req.query;

  // Get the body of the request
  // The value in the body like in post request
  const {

  } = req.body;

  // Get Cookies of the request
  const {

  } = req.cookies;

  res.status(200).json({});
  res.status(200).send({});
  res.redirect(307, 'www.example.com');
  res.revalidate('www.example.com');

};


/**
 * API Route Config
 *
 * Every API route can export a config object to change the default configs
 */
export const config = {
  api: {
    // bodyParser: false, // Disallow body parsing, consume as stream
    bodyParser: {
      sizeLimit: '1mb',
      //   sizeLimit: '500kb',
    },
    // externalResolver: true,
    // responseLimit: false,
    // responseLimit: '8mb',
  },
};


export default TemplateNextAPIHandler;
