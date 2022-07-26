import { getErrorMessage } from "../../../utils/ErrorHandler";
import DBQuery from "../db";



export const getUsers = () => {

  try {
    const query = 'SELECT name, about, email, phone, password, payment, rol FROM defaultdb.users;';
    const values: any = [];
    return DBQuery(query, values);

  } catch (error) {
    throw Error(getErrorMessage(error));
  }

};

export default getUsers;
