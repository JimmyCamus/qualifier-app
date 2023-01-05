import Image from "next/image";
import Link from "next/link";
import { Game } from "../lib/types/game.type";

const Card = ({ game }: { game: Game }) => {
  return (
    <div className="card card-compact w-80 lg:w-96 bg-base-100 shadow-xl mx-7 mt-10">
      <figure>
        <Image
          src={game.images[0]}
          alt={game.description}
          width={500}
          height={500}
          priority
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{game.title}</h2>
        <div className="card-actions justify-end">
          <Link href={`/games/${game.id}`} className="btn btn-primary">
            Rate
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
