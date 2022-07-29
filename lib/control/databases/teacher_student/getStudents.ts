import { getErrorMessage } from "../../../utils/ErrorHandler";
import DBQuery from "../db";



export const getStudents = (
  teacher: string,
) => {

  try {
    const query = 'SELECT student FROM defaultdb.teacher_student WHERE (teacher = ?);';
    const values: any = [
      teacher,
    ];
    return DBQuery(query, values);

  } catch (error) {
    throw Error(getErrorMessage(error));
  }

};

export default getStudents;
