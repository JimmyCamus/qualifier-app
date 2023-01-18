import { Dispatch, SetStateAction } from "react";
import { Game } from "../lib/types/game.type";
import { QueryType } from "../lib/types/search.types";

export const useSearch = () => useHandleSearch;

const useHandleSearch = async (
  queryObject: QueryType,
  setGames: Dispatch<SetStateAction<Game[]>>
) => {
  let query = "";

  if (queryObject.title) {
    query = query + `title=${queryObject.title}`;
  }

  if (queryObject.category) {
    query = query + `&categories[]=${queryObject.category}`;
  }
  const response = await fetch(`/api/games/all?${query}`);
  if (response.status !== 200) {
    return [];
  }

  const { games } = await response.json();

  console.log(games);
  setGames(games);
};
