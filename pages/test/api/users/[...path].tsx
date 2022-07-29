import axios from "axios";
import { NextPage } from "next"
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { v4 as uuid } from 'uuid';

export interface ListPageProps {

}

export const GetUserPage: NextPage = ({ }: ListPageProps) => {

  const router = useRouter();

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);


  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    getUser();
  };

  const getUser = async () => {
    setUser(null);
    setUsers([]);

    setLoading(true);
    setError('');


    const myAxios = axios.create({
      baseURL: '/api/v1/users/get_user',
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
  };

  const getUsers = async () => {
    setUser(null);
    setUsers([]);

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

  // Set the name of the user by the router's query
  useEffect(() => {
    const path = router?.query?.path;

    if (typeof path === 'string') {
      setName(path);
      getUser();
    } else if (Array.isArray(path)) {
      setName(path[0]);
      getUser();
    } else {
      console.log(path);
      getUsers();
    }
  }, [router]);

  useEffect(() => {
    if (name !== '') {
      // getUser();
    }
  }, [name]);

  return (
    <>
      {/* Loading */}
      {loading &&
        <p>Loading...</p>
      }

      {/* Error */}
      {error &&
        <p>Error: { error }</p>
      }

      {/* User name error */}
      {nameError &&
        <p style={{ color: 'red' }}>{nameError}</p>
      }

      {/* Show the user */}
      {user &&
        JSON.stringify(user)
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

export default GetUserPage;
