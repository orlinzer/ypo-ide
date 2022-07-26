// This is an example of to protect an API route
import { getSession } from "next-auth/react"
// import type { NextApiRequest, NextApiResponse } from "next"
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next"

import DBQuery, { USERS_NAME_MAX } from '../../../../lib/control/databases/db';
import { getErrorMessage } from "../../../../lib/utils/ErrorHandler";
import getUser from "../../../../lib/control/databases/users/getUser";
import removeUser from "../../../../lib/control/databases/users/removeUser";
import validator from "../../../../lib/utils/InputValidator";


export const removeUsersHandler: NextApiHandler = async (req, res) => {

  const name = req.body?.name;

  let nameError = '';

  try {

    nameError = await validator({
      name: 'name',
      input: name,
      required: true,
      type: 'string',
      max: USERS_NAME_MAX,
      isNotExist: async () => await getUser(name),
    });

    if (nameError) {
      throw Error('');
    }

    const data = await removeUser(name);

    res.status(200).json({ result: data });
  } catch (error) {
    console.error(getErrorMessage(error));

    // TODO Send default error message
    res.status(500).json({
      error: '', errors: {
        nameError: nameError,
      }
    });
  }

};

export default removeUsersHandler;
