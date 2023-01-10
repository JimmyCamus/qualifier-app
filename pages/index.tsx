import GameList from "../components/GameList";
import { useSetUserData } from "../hooks/user.hooks";
import { useUser } from "../lib/contexts/user.context";
import { Game } from "../lib/types/game.type";
import { User } from "../lib/types/user.type";

const Home = ({ games, user }: { games: Game[]; user: User }) => {
  const userContext = useUser();
  useSetUserData(user, userContext);
  return (
    <>
      <GameList games={games} />
    </>
  );
};

export const getServerSideProps = async () => {
  const data = await fetch(`${process.env.CLIENT_URL}/api/games/all`);
  const { games } = await data.json();
  return {
    props: {
      games,
    },
  };
};

export default Home;
