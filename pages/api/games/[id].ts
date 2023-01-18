import type { NextApiRequest, NextApiResponse } from "next";

import { Game } from "../../../lib/types/game.type";

type Data = {
  game: Game;
};

const getGame = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const game: Game = await getGameData(req.query.id);
  res.status(200).json({ game });
};

export const getGameData = async (
  gameId: string | string[] | number | undefined
) => {
  const response = await fetch(`${process.env.SERVER_URL}/games/${gameId}`);
  const game: Game = await response.json();
  return game;
};

export default getGame;
