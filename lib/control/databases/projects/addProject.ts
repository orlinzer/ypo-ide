import { getErrorMessage } from "../../../utils/ErrorHandler";
import DBQuery from "../db";


export const addProject = (
  user: string,
  name: string,
  about?: string,
  views?: number,
  copies?: number
) => {

  try {
    let queryParamsName = '(user, name';
    let queryValues = '(?, ?';
    let values: any = [
      user,
      name
    ];

    if (about) {
      queryParamsName += ', about';
      queryValues += ', ?';
      values.push(about);
    }
    if (views) {
      queryParamsName += ', views';
      queryValues += ', ?';
      values.push(views);
    }
    if (copies) {
      queryParamsName += ', copies';
      queryValues += ', ?';
      values.push(copies);
    }

    queryParamsName += ')';
    queryValues += ');';

    const query = 'INSERT INTO `defaultdb`.`projects` ' + queryParamsName + ' VALUES ' + queryValues;

    return DBQuery(query, values);

  } catch (error) {
    throw Error(getErrorMessage(error));
  }

};

export default addProject;
