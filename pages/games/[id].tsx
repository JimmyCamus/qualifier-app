import { Game } from "../../lib/types/game.type";

const Game = ({ game }: { game: Game }) => {
  return (
    <div>
      <h1>{game.title}</h1>
    </div>
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
