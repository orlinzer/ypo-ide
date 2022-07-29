import { getErrorMessage } from "../../../utils/ErrorHandler";
import DBQuery from "../db";



export const getNumOfProjectLikes = (
  projectUser: string,
  projectName: string
) => {

  try {
    const query = 'SELECT COUNT(user) FROM defaultdb.likes WHERE (project_user = ?) AND (project_name = ?);';
    const values: any = [
      projectUser,
      projectName,
    ];
    return DBQuery(query, values);

  } catch (error) {
    throw Error(getErrorMessage(error));
  }

};

export default getNumOfProjectLikes;
