import { Game } from "../../lib/types/game.type";

const GamesTable = ({ games }: { games: Game[] }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Reviews</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{game.title}</td>
              <td>{game.comments.length}</td>
              <td>{game.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GamesTable;
