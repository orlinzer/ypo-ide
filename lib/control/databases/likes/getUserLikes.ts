import { getErrorMessage } from "../../../utils/ErrorHandler";
import DBQuery from "../db";



export const getUserLikes = (
  user: string,
) => {

  try {
    const query = 'SELECT project_user, project_name FROM defaultdb.likes WHERE (user = ?);';
    const values: any = [
      user,
    ];
    return DBQuery(query, values);

  } catch (error) {
    throw Error(getErrorMessage(error));
  }

};

export default getUserLikes;
