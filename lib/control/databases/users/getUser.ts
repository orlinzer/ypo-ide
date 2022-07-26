import { getErrorMessage } from "../../../utils/ErrorHandler";
import DBQuery from "../db";



export const getUser = (name: string) => {

  try {
    const query = 'SELECT name, about, email, phone, password, payment, rol FROM defaultdb.users WHERE name = ?;';
    const values: any = [name];
    return DBQuery(query, values);

  } catch (error) {
    throw Error(getErrorMessage(error));
  }

};

export default getUser;
