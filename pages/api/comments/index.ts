import type { NextApiRequest, NextApiResponse } from "next";

import { Comment } from "../../../lib/types/comment.type";

type Data = {
  comment: Comment;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    return await createComment(req, res);
  }
};

const createComment = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { commentFormData, gameId } = req.body;
  const { description, rating } = commentFormData;

  const response = await fetch(`${process.env.SERVER_URL}/comments/${gameId}`, {
    body: JSON.stringify({ description, rating }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${req.cookies.token}`,
    },
  });
  const comment: Comment = await response.json();

  res.status(201).json({ comment: comment });
};

export default handler;
