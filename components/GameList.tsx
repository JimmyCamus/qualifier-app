import { Game } from "../lib/types/game.type";
import Card from "./Card";

const GameList = ({ games }: { games: Game[] }) => {
  return (
    <div className="flex flex-row justify-center lg:justify-evenly my-6 flex-wrap">
      {games.map((game, index) => (
        <Card game={game} key={index} />
      ))}
    </div>
  );
};

export default GameList;
