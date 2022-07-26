import { getErrorMessage } from "../../../utils/ErrorHandler";
import DBQuery from "../db";


export const updateUser = (
  oldName: string,
  name?: string,
  about?: string,
  email?: string,
  phone?: string,
  password?: string,
  payment?: string,
  rol?: string
) => {

  try {
    if (!(name || about || email || phone || password || payment || rol)) { return []; }

    let query = 'UPDATE `defaultdb`.`users` SET ';
    let values: any = [];
    if (name) {
      values.push(name);
      query += 'name = ? ';
    }
    if (about) {
      if (values?.length) { query += ', '; }
      values.push(about);
      query += 'about = ? ';
    }
    if (email) {
      if (values?.length) { query += ', '; }
      values.push(email);
      query += 'email = ? ';
    }
    if (phone) {
      if (values?.length) { query += ', '; }
      values.push(phone);
      query += 'phone = ? ';
    }
    if (password) {
      if (values?.length) { query += ', '; }
      values.push(password);
      query += 'password = ? ';
    }
    if (payment) {
      if (values?.length) { query += ', '; }
      values.push(payment);
      query += 'payment = ? ';
    }
    if (rol) {
      if (values?.length) { query += ', '; }
      values.push(rol);
      query += 'rol = ? ';
    }
    values.push(oldName);
    query += 'WHERE (name = ?);';

    return DBQuery(query, values);
  } catch (error) {
    throw Error(getErrorMessage(error));
  }
};

export default updateUser;
