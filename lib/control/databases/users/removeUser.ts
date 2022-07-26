import { getErrorMessage } from "../../../utils/ErrorHandler";
import DBQuery from "../db";


export const removeUser = (name: string) => {

  try {
    const query = 'DELETE FROM `defaultdb`.`users` WHERE (`name` = ?);';
    const values: any = [
      name,
    ];
    return DBQuery(query, values);

  } catch (error) {
    throw Error(getErrorMessage(error));
  }
};

export default removeUser;
