import { ContextType } from "react";
import { UserContext } from "../lib/contexts/user.context";

export const useLogout = () => useHandleLogout;

const useHandleLogout = async (
  userContext: ContextType<typeof UserContext>
) => {
  const response = await fetch(`/api/auth/logout`);
  const parsedResponse = await response.json();
  console.log(parsedResponse);
  userContext.dispatch({ type: "login", user: {} });
};
