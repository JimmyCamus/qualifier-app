import { ContextType, useEffect } from "react";
import { User } from "../lib/types/user.type";
import { UserContext } from "../lib/contexts/user.context";

export const useSetUserData = (
  user: User,
  userContext: ContextType<typeof UserContext>
) => {
  useEffect(() => {
    const ctxUser = userContext.user as User;
    if (ctxUser.id) return;
    userContext.dispatch({ type: "login", user });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
