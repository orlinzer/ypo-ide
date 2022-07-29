import { getErrorMessage } from "../../../utils/ErrorHandler";
import DBQuery from "../db";



export const getNumOfTeachers = (
  student: string,
) => {

  try {
    const query = 'SELECT COUNT(teacher) FROM defaultdb.teacher_student WHERE (student = ?);';
    const values: any = [
      student,
    ];
    return DBQuery(query, values);

  } catch (error) {
    throw Error(getErrorMessage(error));
  }

};

export default getNumOfTeachers;
