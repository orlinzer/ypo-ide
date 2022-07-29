import { getErrorMessage } from "../../../utils/ErrorHandler";
import DBQuery from "../db";


export const removeProject = (
  user: string,
  name: string,
) => {

  try {
    const query = 'DELETE FROM `defaultdb`.`projects` WHERE (`user` = ?) AND (`name` = ?);';
    const values: any = [
      user,
      name,
    ];
    return DBQuery(query, values);

  } catch (error) {
    throw Error(getErrorMessage(error));
  }
};

export default removeProject;
