// This is an example of to protect an API route
import { getSession } from "next-auth/react";
// import type { NextApiRequest, NextApiResponse } from "next";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

import mysql from 'mysql2/promise';
import { getErrorMessage } from "../../utils/ErrorHandler";

const mysqlConnectionOptions: mysql.ConnectionOptions = {
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  // socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
};

export const USERS_NAME_MAX = 64;
export const USERS_ABOUT_MAX = 256;
export const USERS_EMAIL_MAX = 64;
export const USERS_PHONE_MAX = 64;
export const USERS_PASSWORD_MAX = 256;
export const USERS_PAYMENT_MAX = 256;
export const USERS_ROL_MAX = 64;

export const DBQuery = async (query: string, values = []) => {

  try {
    const dbconnection = await mysql.createConnection(mysqlConnectionOptions);

    const [results] = await dbconnection.execute(query, values);

    dbconnection.end();

    return results;

  } catch (error) {
    throw Error(getErrorMessage(error));
  }

};

export default DBQuery;
