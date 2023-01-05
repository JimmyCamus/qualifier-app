import type { NextApiRequest, NextApiResponse } from "next";

import { Game } from "../../../lib/types/game.type";

type Data = {
  game: Game;
};

const getGame = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const response = await fetch(
    `${process.env.SERVER_URL}/games/${req.query.id}`
  );
  const game: Game = await response.json();
  res.status(200).json({ game });
};

export default getGame;
