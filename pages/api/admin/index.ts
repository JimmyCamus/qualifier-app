import type { NextApiRequest, NextApiResponse } from "next";

import { Game } from "../../../lib/types/game.type";

type Data = {
  game: Game;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    return await createGame(req, res);
  }
};

const createGame = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { title, description, categories } = req.body;
  const response = await fetch(`${process.env.SERVER_URL}/games`, {
    body: JSON.stringify({ title, description, categories }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${req.cookies.token}`,
    },
  });

  const game: Game = await response.json();

  res.status(201).json({ game });
};

export default handler;
