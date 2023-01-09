import { useState } from "react";
import { useHandleStars } from "../hooks/star.hooks";
import { Comment as CommentType } from "../lib/types/comment.type";

const Comment = ({ comment }: { comment: CommentType }) => {
  const [isTruncate, setIsTruncate] = useState<boolean>(true);
  const handleStars = useHandleStars();
  return (
    <div className="card w-full lg:w-full bg-secondary text-secondary-content my-8">
      <div className="card-body">
        <div className="card-title flex flex-row justify-between">
          <h2>{comment.user.username}</h2>
          <div className="rating rating-sm lg:rating-md">
            {handleStars(comment.rating, comment._id)}
          </div>
        </div>
        <div className="flex flex-col">
          <p className={`text-justify ${isTruncate ? "truncate" : null}`}>
            {comment.description}
          </p>
          <button
            className="btn btn-ghost mt-9"
            onClick={() => setIsTruncate(!isTruncate)}
          >
            {isTruncate ? "READ MORE" : "READ LESS"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
