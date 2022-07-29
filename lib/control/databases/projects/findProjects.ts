import { getErrorMessage } from "../../../utils/ErrorHandler";
import DBQuery from "../db";



export const findProjects = (search: string) => {


  try {
    let query = 'SELECT user, name, about, views, copies ' +
      'FROM defaultdb.projects WHERE ';

    let values: any = [];
    search.split(' ').forEach(word => {
      if (values?.length) { query += 'OR '; }
      query += 'LOWER( user ) LIKE LOWER( ? ) OR \n' +
        'LOWER( name ) LIKE LOWER( ? ) OR \n' +
        'LOWER( about ) LIKE LOWER( ? ) OR \n' +
        'LOWER( views ) LIKE LOWER( ? ) OR \n' +
        'LOWER( copies ) LIKE LOWER( ? )';
      for (let i = 0; i < 5; i++) { values.push(`%${word}%`); }
    });
    query += ';';

    return DBQuery(query, values);

  } catch (error) {
    throw Error(getErrorMessage(error));
  }

};

export default findProjects;
