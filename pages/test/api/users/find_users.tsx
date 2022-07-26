import axios from "axios";
import { NextPage } from "next"
import React, { useEffect, useRef, useState } from "react";
import { v4 as uuid } from 'uuid';

export interface ListPageProps {

}

export const FindUsersPage: NextPage = ({ }: ListPageProps) => {

  const [search, setSearch] = useState('');

  const [searchError, setSearchError] = useState('');

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');


  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    findUser();
  };

  const findUser = async () => {

    setLoading(true);
    setError('');
    setSearchError('');


    const myAxios = axios.create({
      baseURL: '/api/v1/users/find_users',
      method: 'POST',
      timeout: 3600,
      headers: { 'content-type': 'application/json' },
      // withCredentials: true,
    });

    myAxios.request({
      data: {
        search: search,
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
      setSearchError(reason.response?.data?.errors?.searchError);
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
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {searchError &&
          <span style={{color: 'red'}}>{searchError}</span>
        }
        <br/>

        <input type="submit" value="Get User" />
      </form>

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

export default FindUsersPage;
