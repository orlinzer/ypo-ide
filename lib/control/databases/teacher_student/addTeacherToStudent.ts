import { getErrorMessage } from "../../../utils/ErrorHandler";
import DBQuery from "../db";


export const addTeacherToStudent = (
  teacher: string,
  student: string
) => {

  try {
    const query = 'INSERT INTO `defaultdb`.`teacher_student` (`teacher`, `student`) VALUES (?, ?);';
    const values: any = [
      teacher,
      student,
    ];
    return DBQuery(query, values);

  } catch (error) {
    throw Error(getErrorMessage(error));
  }

};

export default addTeacherToStudent;
