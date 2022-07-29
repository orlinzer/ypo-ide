import { getErrorMessage } from "../../../utils/ErrorHandler";
import DBQuery from "../db";


export const updateUser = (
  user: string,
  oldName: string,
  name?: string,
  about?: string,
  views?: number,
  copies?: number
) => {

  try {
    if (!(name || about || views || copies)) { return []; }

    let query = 'UPDATE `defaultdb`.`projects` SET ';
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
    if (views) {
      if (values?.length) { query += ', '; }
      values.push(views);
      query += 'views = ? ';
    }
    if (copies) {
      if (values?.length) { query += ', '; }
      values.push(copies);
      query += 'copies = ? ';
    }

    values.push(user);
    values.push(oldName);
    query += 'WHERE (user = ?) AND (name = ?);';

    return DBQuery(query, values);
  } catch (error) {
    throw Error(getErrorMessage(error));
  }
};

export default updateUser;
