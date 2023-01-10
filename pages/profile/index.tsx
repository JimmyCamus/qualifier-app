import { GetServerSidePropsContext } from "next";
import Profile from "../../components/auth/Profile";
import { useUser } from "../../lib/contexts/user.context";
import { Comment } from "../../lib/types/comment.type";
import { User } from "../../lib/types/user.type";
import { getUser } from "../../utils/user.utils";

const ProfilePage = ({ comments }: { comments: Comment[] }) => {
  const userContext = useUser();
  const user = userContext.user as User;
  return <Profile user={user} comments={comments} />;
};

export default ProfilePage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const user = (await getUser(context.req)) as User;
  const data = await fetch(`${process.env.CLIENT_URL}/api/comments/${user.id}`);
  const { comments } = await data.json();
  return {
    props: {
      comments,
    },
  };
};
