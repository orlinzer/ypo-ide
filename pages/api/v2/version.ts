import { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react"

export const Version = async (req: NextApiRequest, res: NextApiResponse) => {

  res.send({
    content: "Version 2"
  });
};

export default Version;