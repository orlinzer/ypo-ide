import { getErrorMessage } from "../../../utils/ErrorHandler";
import DBQuery from "../db";



export const getTeachers = (
  student: string
) => {

  try {
    const query = 'SELECT teacher FROM defaultdb.teacher_student WHERE (student = ?);';
    const values: any = [
      student,
    ];
    return DBQuery(query, values);

  } catch (error) {
    throw Error(getErrorMessage(error));
  }

};

export default getTeachers;
