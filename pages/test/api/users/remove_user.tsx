import axios from "axios";
import { NextPage } from "next"
import React, { useEffect, useRef, useState } from "react";
import { v4 as uuid } from 'uuid';

export interface ListPageProps {

}

export const RemoveUserPage: NextPage = ({ }: ListPageProps) => {

  const [name, setName] = useState('');

  const [nameError, setNameError] = useState('');

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    removeUser();
  };

  const removeUser = async () => {

    setLoading(true);
    setError('');
    setNameError('');

    const myAxios = axios.create({
      baseURL: '/api/v1/users/remove_user',
      method: 'POST',
      timeout: 3600,
      headers: { 'content-type': 'application/json' },
      // withCredentials: true,
    });

    myAxios.request({
      data: {
        name: name,
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

export default RemoveUserPage;
