import { getErrorMessage } from "../../../utils/ErrorHandler";
import DBQuery from "../db";



export const getProjects = () => {

  try {
    const query = 'SELECT user, name, about, views, copies FROM defaultdb.projects;';
    const values: any = [];
    return DBQuery(query, values);

  } catch (error) {
    throw Error(getErrorMessage(error));
  }

};

export default getProjects;
