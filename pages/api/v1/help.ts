import { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react"

export default async (req: NextApiRequest, res: NextApiResponse) => {

  res.send({
    content: "YPO-IDE Help"
  });
}
