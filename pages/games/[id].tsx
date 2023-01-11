import GameDetail from "../../components/GameDetail";
import { useUser } from "../../lib/contexts/user.context";
import { Game } from "../../lib/types/game.type";
import { User } from "../../lib/types/user.type";

const Game = ({ game }: { game: Game }) => {
  const userContext = useUser();
  const user = userContext.user as User;
  return (
    <>
      <GameDetail game={game} user={user} />
    </>
  );
};

export default Game;

export const getServerSideProps = async (ctx: any) => {
  const data = await fetch(
    `${process.env.CLIENT_URL}/api/games/${ctx.params.id}`
  );
  const { game } = await data.json();
  return {
    props: {
      game,
    },
  };
};
