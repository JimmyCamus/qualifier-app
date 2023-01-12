import type { NextApiRequest, NextApiResponse } from "next";

import { Game } from "../../../lib/types/game.type";

type Data = {
  games: Game[];
};

const getAllGames = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  let query = "";
  if (req.query.title) {
    query = query + `title=${req.query.title}`;
  }

  if (req.query["categories[]"]) {
    query = query + `&categories[]=${req.query["categories[]"]}`;
  }
  const response = await fetch(`${process.env.SERVER_URL}/games?${query}`);
  const games: Game[] = await response.json();

  res.status(200).json({ games });
};

export default getAllGames;
