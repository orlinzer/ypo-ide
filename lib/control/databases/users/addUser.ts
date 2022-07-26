import { getErrorMessage } from "../../../utils/ErrorHandler";
import DBQuery from "../db";


export const addUser = (
  name: string,
  about: string,
  email: string,
  phone: string,
  password: string,
  payment: string,
  rol: string) => {

  try {
    const query = 'INSERT INTO `defaultdb`.`users` (`name`, `about`, `email`, `phone`, `password`, `payment`, `rol`) VALUES (?, ?, ?, ?, ?, ?, ?);';
    const values: any = [
      name,
      about,
      email,
      phone,
      password,
      payment,
      rol
    ];
    return DBQuery(query, values);

  } catch (error) {
    throw Error(getErrorMessage(error));
  }

};

export default addUser;
