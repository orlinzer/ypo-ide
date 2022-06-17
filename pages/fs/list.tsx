import axios from "axios";
import { NextPage } from "next"
import React, { useRef, useState } from "react";

export interface ListPageProps {

}

export const ListPage: NextPage = ({ }: ListPageProps) => {

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [path, setPath] = useState('');

  // const onChange = async (formData: FormData) => {

  //   const config = {
  //     headers: { 'content-type': 'multipart/form-data' },
  //     onUploadProgress: (event: ProgressEvent) => {
  //       console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
  //     },
  //   };

  //   const response = await axios.post('/api/v1/fs/list', formData, config);

  //   console.log('response', response.data);
  // };

  // const onClickHandler = () => {
  //   fileInputRef.current?.click();
  // };

  // const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  // if (!event.target.files?.length) {
  //   return;
  // }

  // const formData = new FormData();

  // Array.from(event.target.files).forEach((file) => {
  //   // formData.append(event.target.name, file);
  //   // formData.append(event.target.name, path);
  // });

  // onChange(formData);

  // formRef.current?.reset();
  // };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const config = {
    //   // headers: { 'content-type': 'multipart/form-data' },
    //   headers: { 'content-type': 'application/json' },

    //   // onUploadProgress: (event: ProgressEvent) => {
    //   //   console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
    //   // },
    // };

    // const response = await axios.post('/api/v1/fs/list', { path: 'bla bla bla', ...e }, config);
    // const response = await axios.post('/api/v1/fs/list', e, config);
    const myAxios = axios.create({
      baseURL: '/api/v1/fs/list',
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
    // const response = await axios.post('/api/v1/fs/list', { path: 'bla bla bla' }, config);

    // console.log('response', response);
    console.log('response', response.data);
  };

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
    // method={'POST'}
    // action={'/api/v1/fs/list'}
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
        {'List Single File'}
      </button>
      {/* <button type="button" onClick={onClickHandler}>
        {'List Single File'}
      </button> */}
      {/* <input
        accept={''}
        multiple={false}
        name={'theFiles'}
        onChange={onChangeHandler}
        ref={fileInputRef}
        style={{ display: 'none' }}
        type="file"
      /> */}
    </form>
  );
}

export default ListPage;
