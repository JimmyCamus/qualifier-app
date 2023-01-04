import type { NextApiRequest, NextApiResponse } from "next";

import { Game } from "../../../lib/types/game.type";

type Data = {
  games: Game[];
};

const getAllGames = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  console.log(req.query);
  const response = await fetch(`${process.env.SERVER_URL}/games`);
  const games: Game[] = await response.json();

  res.status(200).json({ games });
};

export default getAllGames;
