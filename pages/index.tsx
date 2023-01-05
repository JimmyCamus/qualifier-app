import GameList from "../components/GameList";
import { Game } from "../lib/types/game.type";

const Home = ({ games }: { games: Game[] }) => {
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
