import { getErrorMessage } from "../../../utils/ErrorHandler";
import DBQuery from "../db";


export const addLike = (
  user: string,
  projectUser: string,
  projectName: string) => {

  try {
    const query = 'INSERT INTO `defaultdb`.`likes` (`user`, `project_user`, `project_name`) VALUES (?, ?, ?);';
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

export default addLike;
