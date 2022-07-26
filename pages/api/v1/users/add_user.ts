// This is an example of to protect an API route
import { getSession } from "next-auth/react"
// import type { NextApiRequest, NextApiResponse } from "next"
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next"

import DBQuery, { USERS_ABOUT_MAX, USERS_EMAIL_MAX, USERS_NAME_MAX, USERS_PASSWORD_MAX, USERS_PAYMENT_MAX, USERS_PHONE_MAX, USERS_ROL_MAX } from '../../../../lib/control/databases/db';
import { getErrorMessage } from "../../../../lib/utils/ErrorHandler";
import addUser from "../../../../lib/control/databases/users/addUser";
import getUser from "../../../../lib/control/databases/users/getUser";
import validator from "../../../../lib/utils/InputValidator";


export const addUsersHandler: NextApiHandler = async (req, res) => {

  const name = req.body?.name;
  const about = req.body?.about;
  const email = req.body?.email;
  const phone = req.body?.phone;
  const password = req.body?.password;
  const payment = req.body?.payment;
  const rol = req.body?.rol;

  let nameError = '';
  let aboutError = '';
  let emailError = '';
  let phoneError = '';
  let passwordError = '';
  let paymentError = '';
  let rolError = '';

  try {

    nameError = await validator({
      name: 'name',
      input: name,
      required: true,
      type: 'string',
      max: USERS_NAME_MAX,
      isExist: async () => await getUser(name),
    });

    aboutError = await validator({
      name: 'about',
      input: about,
      required: true,
      type: 'string',
      max: USERS_ABOUT_MAX,
    });

    emailError = await validator({
      name: 'email',
      input: email,
      required: true,
      type: 'string',
      max: USERS_EMAIL_MAX,
    });

    phoneError = await validator({
      name: 'phone',
      input: phone,
      required: true,
      type: 'string',
      max: USERS_PHONE_MAX,
    });

    passwordError = await validator({
      name: 'password',
      input: password,
      required: true,
      type: 'string',
      max: USERS_PASSWORD_MAX,
    });

    paymentError = await validator({
      name: 'payment',
      input: payment,
      required: true,
      type: 'string',
      max: USERS_PAYMENT_MAX,
    });

    rolError = await validator({
      name: 'rol',
      input: rol,
      required: true,
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

    const data = await addUser(name, about, email, phone, password, payment, rol);

    res.status(200).json({ result: data });
  } catch (error) {
    console.error(getErrorMessage(error));

    // TODO Send default error message
    res.status(500).json({
      error: '', errors: {
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
