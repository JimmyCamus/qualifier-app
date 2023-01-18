import { useRouter } from "next/router";
import { useEffect } from "react";
import { User, UserRole } from "../../lib/types/user.type";

const AdminRoute = ({ user, children }: { user: User; children: any }) => {
  const isUser = Object.keys(user).length !== 0;
  const router = useRouter();

  useEffect(() => {
    if (isUser) {
      if (user.role === UserRole.ADMIN) {
        router.push("/admin");
        return;
      }
    }
    router.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isUser) return <></>;

  return children;
};

export default AdminRoute;
