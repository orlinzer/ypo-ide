// This is an example of to protect an API route
import { getSession } from "next-auth/react"
// import type { NextApiRequest, NextApiResponse } from "next"
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next"

import DBQuery, { USERS_NAME_MAX } from '../../../../lib/control/databases/db';
import { getErrorMessage } from "../../../../lib/utils/ErrorHandler";
import getUser from "../../../../lib/control/databases/users/getUser";
import validator from "../../../../lib/utils/InputValidator";
import findUsers from "../../../../lib/control/databases/users/findUsers";


export const findUsersHandler: NextApiHandler = async (req, res) => {

  const search = req.body?.search;

  let searchError = '';

  try {

    searchError = await validator({
      name: 'search',
      input: search,
      required: true,
      type: 'string',
    });

    if (searchError) {
      throw Error('');
    }

    const data = await findUsers(search);

    res.status(200).json({ result: data });
  } catch (error) {
    console.error(getErrorMessage(error));

    // TODO Send default error message
    res.status(500).json({
      error: '', errors: {
        searchError: searchError,
      }
    });
  }

};

export default findUsersHandler;
