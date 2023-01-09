import { useHandleStars } from "../hooks/star.hooks";
import { Game } from "../lib/types/game.type";
import Carousel from "./Carousel";
import Comment from "./Comment";

const GameDetail = ({ game }: { game: Game }) => {
  const handleStars = useHandleStars();
  console.log(game);
  if (!game) return <progress className="progress w-56"></progress>;

  return (
    <div className="flex justify-center">
      <div className="w-[90vw] lg:w-1/2">
        <Carousel images={game.images} />
        <h1 className="font-bold text-2xl text-center lg:text-4xl text-black mt-8">
          {game.title}
        </h1>
        <p className="text-justify mt-8 text-lg">{game.description}</p>
        <div className="rating rating-lg flex justify-center mt-8">
          {handleStars(game.rating, "game")}
        </div>
        {game.comments.map((comment, index) => (
          <div key={index} className="flex justify-center">
            <Comment comment={comment} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameDetail;
