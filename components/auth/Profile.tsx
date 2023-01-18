import { Comment as CommentType } from "../../lib/types/comment.type";
import { User } from "../../lib/types/user.type";
import Comment from "../Comment";

const Profile = ({
  user,
  comments,
}: {
  user: User;
  comments: CommentType[];
}) => {
  return (
    <div className="flex justify-center">
      <div className="w-[90vw] lg:w-1/2">
        <h2 className="text-center text-2xl">Your reviews</h2>
        {comments.map((comment, index) => (
          <div key={index} className="flex justify-center">
            <Comment comment={comment} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
