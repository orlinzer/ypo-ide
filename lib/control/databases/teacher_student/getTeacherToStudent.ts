import { getErrorMessage } from "../../../utils/ErrorHandler";
import DBQuery from "../db";



export const getTeacherToStudent = (
  teacher: string,
  student: string
) => {

  try {
    const query = 'SELECT teacher, student FROM defaultdb.teacher_student WHERE (teacher = ?) AND (student = ?);';
    const values: any = [
      teacher,
      student,
    ];
    return DBQuery(query, values);

  } catch (error) {
    throw Error(getErrorMessage(error));
  }

};

export default getTeacherToStudent;
