import { GetServerSidePropsContext } from "next";
import Profile from "../../components/auth/Profile";
import { useSetUserData } from "../../hooks/user.hooks";
import { useUser } from "../../lib/contexts/user.context";
import { Comment } from "../../lib/types/comment.type";
import { User } from "../../lib/types/user.type";
import { getUser } from "../../utils/user.utils";
import { getCommentsByUserData } from "../api/comments/[user-id]";

const ProfilePage = ({
  comments,
  userFromCookies,
}: {
  comments: Comment[];
  userFromCookies: User;
}) => {
  useSetUserData(userFromCookies);
  const userContext = useUser();
  const user = userContext.user as User;
  return <Profile user={user} comments={comments} />;
};

export default ProfilePage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const user = (await getUser(context.req)) as User;
  const comments = await getCommentsByUserData(user.id);
  return {
    props: {
      comments,
      userFromCookies: user,
    },
  };
};
