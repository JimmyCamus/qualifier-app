import { GetServerSidePropsContext } from "next";
import GameDetail from "../../components/GameDetail";
import { useSetUserData } from "../../hooks/user.hooks";
import { useUser } from "../../lib/contexts/user.context";
import { Game } from "../../lib/types/game.type";
import { User } from "../../lib/types/user.type";
import { getUser } from "../../utils/user.utils";
import { getGameData } from "../api/games/[id]";

const Game = ({
  game,
  userFromCoockie,
}: {
  game: Game;
  userFromCoockie: User;
}) => {
  useSetUserData(userFromCoockie);
  const userContext = useUser();
  const user = userContext.user as User;
  return (
    <>
      <GameDetail game={game} user={user} />
    </>
  );
};

export default Game;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const user = await getUser(context.req);
  const game = await getGameData(context.params?.id);
  return {
    props: {
      game,
      userFromCoockie: user,
    },
  };
};
