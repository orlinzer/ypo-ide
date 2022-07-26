import axios from "axios";
import { NextPage } from "next"
import React, { useEffect, useRef, useState } from "react";
import { v4 as uuid } from 'uuid';

export interface ListPageProps {

}

export const AddUserPage: NextPage = ({ }: ListPageProps) => {

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [payment, setPayment] = useState('');
  const [rol, setRol] = useState('');

  const [nameError, setNameError] = useState('');
  const [aboutError, setAboutError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [paymentError, setPaymentError] = useState('');
  const [rolError, setRolError] = useState('');

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addUser();
  };

  const addUser = async () => {

    setLoading(true);
    setError('');
    setNameError('');
    setAboutError('');
    setEmailError('');
    setPhoneError('');
    setPasswordError('');
    setPaymentError('');
    setRolError('');

    const myAxios = axios.create({
      baseURL: '/api/v1/users/add_user',
      method: 'POST',
      timeout: 3600,
      headers: { 'content-type': 'application/json' },
      // withCredentials: true,
    });

    myAxios.request({
      data: {
        name: name,
        about: about,
        email: email,
        phone: phone,
        password: password,
        payment: payment,
        rol: rol,
      },
      // headers: {
      //   Authorization: 'Bearer accesstoken'
      // }
    }).
    then(res => {
      console.log('response', res);
      setUser(res.data?.result);
    }).
    catch(reason => {
      console.error(reason);
      console.error(reason.response?.data);

      setError(reason.response?.data?.error || 'An Unknown error occurred');
      setNameError(reason.response?.data?.errors?.nameError);
      setAboutError(reason.response?.data?.errors?.aboutError);
      setEmailError(reason.response?.data?.errors?.emailError);
      setPhoneError(reason.response?.data?.errors?.phoneError);
      setPasswordError(reason.response?.data?.errors?.passwordError);
      setPaymentError(reason.response?.data?.errors?.paymentError);
      setRolError(reason.response?.data?.errors?.rolError);
    }).
    finally(() => {
      setLoading(false);
    });


  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        {nameError &&
          <span style={{color: 'red'}}>{nameError}</span>
        }
        <br/>
        <input
          type="text"
          name="about"
          id="about"
          placeholder="about"
          value={about}
          onChange={e => setAbout(e.target.value)}
        />
        {aboutError &&
          <span style={{color: 'red'}}>{aboutError}</span>
        }
        <br/>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {emailError &&
          <span style={{color: 'red'}}>{emailError}</span>
        }
        <br/>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        {phoneError &&
          <span style={{color: 'red'}}>{phoneError}</span>
        }
        <br/>
        <input
          type="text"
          name="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {passwordError &&
          <span style={{color: 'red'}}>{passwordError}</span>
        }
        <br/>
        <input
          type="text"
          name="payment"
          id="payment"
          placeholder="payment"
          value={payment}
          onChange={e => setPayment(e.target.value)}
        />
        {paymentError &&
          <span style={{color: 'red'}}>{paymentError}</span>
        }
        <br/>
        <input
          type="text"
          name="rol"
          id="rol"
          placeholder="rol"
          value={rol}
          onChange={e => setRol(e.target.value)}
        />
        {rolError &&
          <span style={{color: 'red'}}>{rolError}</span>
        }
        <br/>

        <input type="submit" value="Add User" />
      </form>

      {/* Loading */}
      {loading &&
        <p>Loading...</p>
      }

      {/* Error */}
      {error &&
        <p>Error: { error }</p>
      }

      {/* Show the user */}
      {user &&
        JSON.stringify(user)
      }
    </>
  );
}

export default AddUserPage;
