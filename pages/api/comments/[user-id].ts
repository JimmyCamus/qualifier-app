import type { NextApiRequest, NextApiResponse } from "next";

import { Comment } from "../../../lib/types/comment.type";

type Data = {
  comments: Comment[];
};

const getCommentsByUser = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const response = await fetch(
    `${process.env.SERVER_URL}/comments?user=${req.query["user-id"]}`
  );
  const comments: Comment[] = await response.json();

  res.status(200).json({ comments });
};

export default getCommentsByUser;
