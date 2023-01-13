import { useHandleStars } from "../hooks/star.hooks";
import { Game } from "../lib/types/game.type";
import { User } from "../lib/types/user.type";
import Carousel from "./Carousel";
import Comment from "./Comment";
import CommentModal from "./CommentModal";

const GameDetail = ({ game, user }: { game: Game; user: User }) => {
  const handleStars = useHandleStars();

  if (!game) return null;

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
        {user.id ? (
          <div className="flex justify-center my-11">
            <CommentModal game={game} />
          </div>
        ) : null}
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
