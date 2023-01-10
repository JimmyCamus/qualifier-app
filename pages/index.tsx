import { GetServerSidePropsContext } from "next";
import GameList from "../components/GameList";
import { useSetUserData } from "../hooks/user.hooks";
import { Game } from "../lib/types/game.type";
import { User } from "../lib/types/user.type";
import { getUser } from "../utils/user.utils";

const Home = ({ games, user }: { games: Game[]; user: User }) => {
  useSetUserData(user);
  return (
    <>
      <GameList games={games} />
    </>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const user = await getUser(context.req);
  const data = await fetch(`${process.env.CLIENT_URL}/api/games/all`);
  const { games } = await data.json();
  return {
    props: {
      games,
      user,
    },
  };
};

export default Home;
