import { useRouter } from "next/router";
import { useEffect } from "react";

const AdminRoute = ({ user, children }: any) => {
  const isUser = Object.keys(user).length !== 0;
  const router = useRouter();

  useEffect(() => {
    if (!isUser) {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isUser) return <></>;

  return children;
};

export default AdminRoute;
