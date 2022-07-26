// This is an example of to protect an API route
import { getSession } from "next-auth/react"
// import type { NextApiRequest, NextApiResponse } from "next"
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next"

import DBQuery from '../../../../lib/control/databases/db';
import { getErrorMessage } from "../../../../lib/utils/ErrorHandler";
import getUsers from "../../../../lib/control/databases/users/getUsers";


export const getUsersHandler: NextApiHandler = async (req, res) => {

  try {
    const data = await getUsers();

    res.status(200).json({ result: data });
  } catch (error) {
    res.status(500).json({ error: getErrorMessage(error) });
  }

};

export default getUsersHandler;
