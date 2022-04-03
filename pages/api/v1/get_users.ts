import { NextApiRequest, NextApiResponse } from "next";
// import { getSession } from "next-auth/react";
// import { User } from '../../../types/User';

export const GetUser = async (req: NextApiRequest, res: NextApiResponse) => {

  res.status(200).json(
    [
      {
        name: 'user name 1',
        about: 'user about 1',
        image: 'images/test_users/photo-1570295999919-56ceb5ecca61.avif'
      },
      {
        name: 'user name 2',
        about: 'user about 2',
        image: 'images/test_users/photo-1573497019940-1c28c88b4f3e.avif'
      },
      {
        name: 'user name 3',
        about: 'user about 3',
        image: 'images/test_users/photo-1633332755192-727a05c4013d.avif'
      }
    ]
  );
};

export default GetUser;