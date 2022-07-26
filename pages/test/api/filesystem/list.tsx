import axios from "axios";
import { NextPage } from "next"
import React, { useRef, useState } from "react";
import { v4 as uuid } from 'uuid';

export interface ListPageProps {

}

export const ListPage: NextPage = ({ }: ListPageProps) => {

  const [path, setPath] = useState('');
  const [list, setList] = useState([]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const myAxios = axios.create({
      baseURL: '/api/v1/filesystem/list',
      method: 'POST',
      timeout: 3600,
      headers: { 'content-type': 'application/json' },
      // withCredentials: true,
    });

    const response = await myAxios.request({
      data: { path: path },
      // headers: {
      //   Authorization: 'Bearer accesstoken'
      // }
    });

    console.log('response', response);
    console.log('response', response?.data?.result);
    setList(response?.data?.result);
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
      >
        <input
          type={'text'}
          placeholder={'Path'}
          name={'path'}
          value={path}
          onChange={(e) => setPath(e.target.value)}
        />
        <button
          type={'submit'}
        >
          List Single File
        </button>
      </form>

      {/* Show the list */}
      {
        list &&
        <ul>
          {
            list.map(item => (
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

export default ListPage;
