import { getErrorMessage } from "../../../utils/ErrorHandler";
import DBQuery from "../db";



export const getNumOfProjects = (
  user?: string,
) => {

  try {
    let query = 'SELECT COUNT(*) FROM defaultdb.projects';
    const values: any = [];

    if (user) {
      query += ' WHERE user = ?;';
      values.push(user);
    }

    return DBQuery(query, values);

  } catch (error) {
    throw Error(getErrorMessage(error));
  }

};

export default getNumOfProjects;
