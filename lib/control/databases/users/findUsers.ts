import { getErrorMessage } from "../../../utils/ErrorHandler";
import DBQuery from "../db";



export const findUsers = (search: string) => {


  try {
    let query = 'SELECT name, about, email, phone, password, payment, rol ' +
      'FROM defaultdb.users WHERE ';

    let values: any = [];
    search.split(' ').forEach(word => {
      if (values?.length) { query += 'OR '; }
      query += 'LOWER( name ) LIKE LOWER( ? ) OR \n' +
        'LOWER( about ) LIKE LOWER( ? ) OR \n' +
        'LOWER( email ) LIKE LOWER( ? ) OR \n' +
        'LOWER( phone ) LIKE LOWER( ? ) OR \n' +
        'LOWER( rol ) LIKE LOWER( ? ) ';
      for (let i = 0; i < 5; i++) { values.push(`%${word}%`); }
    });
    query += ';';


    return DBQuery(query, values);

  } catch (error) {
    throw Error(getErrorMessage(error));
  }

};

export default findUsers;
