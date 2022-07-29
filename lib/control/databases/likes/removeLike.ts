import { getErrorMessage } from "../../../utils/ErrorHandler";
import DBQuery from "../db";


export const removeLike = (
  user: string,
  projectUser: string,
  projectName: string
) => {

  try {
    const query = 'DELETE FROM `defaultdb`.`likes` WHERE (`user` = ?) AND (`project_name` = ?) AND (`project_user` = ?);';
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

export default removeLike;
