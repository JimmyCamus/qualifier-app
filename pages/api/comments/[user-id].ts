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
  const comments: Comment[] = await getCommentsByUserData(req.query["user-id"]);

  res.status(200).json({ comments });
};

export const getCommentsByUserData = async (
  userId: string | string[] | number | undefined
) => {
  const response = await fetch(
    `${process.env.SERVER_URL}/comments?user=${userId}`
  );
  const comments: Comment[] = await response.json();
  return comments;
};

export default getCommentsByUser;
