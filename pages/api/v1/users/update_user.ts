// This is an example of to protect an API route
import { getSession } from "next-auth/react"
// import type { NextApiRequest, NextApiResponse } from "next"
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next"

import DBQuery, { USERS_ABOUT_MAX, USERS_EMAIL_MAX, USERS_NAME_MAX, USERS_PASSWORD_MAX, USERS_PAYMENT_MAX, USERS_PHONE_MAX, USERS_ROL_MAX } from '../../../../lib/control/databases/db';
import { getErrorMessage } from "../../../../lib/utils/ErrorHandler";
import addUser from "../../../../lib/control/databases/users/addUser";
import getUser from "../../../../lib/control/databases/users/getUser";
import validator from "../../../../lib/utils/InputValidator";
import updateUser from "../../../../lib/control/databases/users/updateUser";


export const addUsersHandler: NextApiHandler = async (req, res) => {

  const oldName = req.body?.oldName;
  const name = req.body?.name;
  const about = req.body?.about;
  const email = req.body?.email;
  const phone = req.body?.phone;
  const password = req.body?.password;
  const payment = req.body?.payment;
  const rol = req.body?.rol;

  let oldNameError = '';
  let nameError = '';
  let aboutError = '';
  let emailError = '';
  let phoneError = '';
  let passwordError = '';
  let paymentError = '';
  let rolError = '';

  try {

    oldNameError = await validator({
      name: 'Old Name',
      input: oldName,
      required: true,
      type: 'string',
      max: USERS_NAME_MAX,
      isNotExist: async () => await getUser(oldName),
    });

    nameError = await validator({
      name: 'name',
      input: name,
      type: 'string',
      max: USERS_NAME_MAX,
      isExist: async () => await getUser(name),
    });

    aboutError = await validator({
      name: 'about',
      input: about,
      type: 'string',
      max: USERS_ABOUT_MAX,
    });

    emailError = await validator({
      name: 'email',
      input: email,
      type: 'string',
      max: USERS_EMAIL_MAX,
    });

    phoneError = await validator({
      name: 'phone',
      input: phone,
      type: 'string',
      max: USERS_PHONE_MAX,
    });

    passwordError = await validator({
      name: 'password',
      input: password,
      type: 'string',
      max: USERS_PASSWORD_MAX,
    });

    paymentError = await validator({
      name: 'payment',
      input: payment,
      type: 'string',
      max: USERS_PAYMENT_MAX,
    });

    rolError = await validator({
      name: 'rol',
      input: rol,
      type: 'string',
      max: USERS_ROL_MAX,
    });

    if (
      nameError ||
      aboutError ||
      emailError ||
      phoneError ||
      passwordError ||
      paymentError ||
      rolError
    ) {
      throw Error('');
    }

    const data = await updateUser(oldName, name, about, email, phone, password, payment, rol);

    res.status(200).json({ result: data });
  } catch (error) {
    console.error(getErrorMessage(error));

    // TODO Send default error message
    res.status(500).json({
      error: '', errors: {
        oldNameError: oldNameError,
        nameError: nameError,
        aboutError: aboutError,
        emailError: emailError,
        phoneError: phoneError,
        passwordError: passwordError,
        paymentError: paymentError,
        rolError: rolError,
      }
    });
  }

};

export default addUsersHandler;
