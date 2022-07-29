import { getErrorMessage } from "../../../utils/ErrorHandler";
import DBQuery from "../db";



export const getLike = (
  user: string,
  projectUser: string,
  projectName: string
) => {

  try {
    const query = 'SELECT user, project_user, project_name FROM defaultdb.likes WHERE (user = ?) AND (project_user = ?) AND (project_name = ?);';
    const values: any = [
      user,
      projectUser,
      projectName,
    ];
    return DBQuery(query, values);

  } catch (error) {
    throw Error(getErrorMessage(error));
  }

};

export default getLike;
