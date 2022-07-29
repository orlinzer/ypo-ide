import { getErrorMessage } from "../../../utils/ErrorHandler";
import DBQuery from "../db";



export const getNumOfUserLikes = (
  user: string,
) => {

  try {
    const query = 'SELECT COUNT(*) FROM defaultdb.likes WHERE (user = ?);';
    const values: any = [
      user,
    ];
    return DBQuery(query, values);

  } catch (error) {
    throw Error(getErrorMessage(error));
  }

};

export default getNumOfUserLikes;
