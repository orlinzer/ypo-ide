import axios from "axios";
import { NextPage } from "next"
import React, { useEffect, useRef, useState } from "react";
import { v4 as uuid } from 'uuid';

export interface ListPageProps {

}

export const GetUsersPage: NextPage = ({ }: ListPageProps) => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const myAxios = axios.create({
      baseURL: '/api/v1/filesystem/get',
      method: 'POST',
      timeout: 3600,
      headers: { 'content-type': 'application/json' },
      // withCredentials: true,
    });

    const response = await myAxios.request({
      // data: { path: path },
      // headers: {
      //   Authorization: 'Bearer accesstoken'
      // }
    });

    console.log('response', response);
    // console.log('response', response?.data?.result);
    // setObject(response?.data?.result);
    // setObject(response);
  };

  const getUsers = async () => {

    setLoading(true);
    setError('');

    const myAxios = axios.create({
      baseURL: '/api/v1/users/get_users',
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
      setUsers(res.data?.result);
    }).
    catch(reason => {
      console.error(reason);
      console.error(reason.response?.data);

      setError(reason.response?.data?.error || 'An Unknown error occurred');
      // setNameError(reason.response?.data?.errors?.nameError);
    }).
    finally(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <button onClick={getUsers}>Refresh</button>

      {/* Loading */}
      {loading &&
        <p>Loading...</p>
      }

      {/* Error */}
      {error &&
        <p>Error: { error }</p>
      }

      {/* Show the users list */}
      {
        // JSON.stringify(object)
        users &&
        <ul>
          {
            users.map(item => (
              <li key={uuid()}>
                {JSON.stringify(item)}
              </li>
            ))
          }
        </ul>
      }
    </>
  );
}

export default GetUsersPage;
