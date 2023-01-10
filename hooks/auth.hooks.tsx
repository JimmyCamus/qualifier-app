import { NextRouter } from "next/router";
import { ContextType, Dispatch, SetStateAction } from "react";
import { UserContext } from "../lib/contexts/user.context";
import { LoginFormFieldsType } from "../lib/types/entries.type";

export const useLogout = () => useHandleLogout;

const useHandleLogout = async (
  userContext: ContextType<typeof UserContext>
) => {
  const response = await fetch(`/api/auth/logout`);
  const parsedResponse = await response.json();
  console.log(parsedResponse);
  userContext.dispatch({ type: "login", user: {} });
};

export const useLogin = () => useHandleLogin;

const useHandleLogin = async (
  userContext: ContextType<typeof UserContext>,
  router: NextRouter,
  fields: LoginFormFieldsType,
  setLoginFormError: Dispatch<SetStateAction<boolean>>
) => {
  const res = await fetch(`/api/auth/login`, {
    body: JSON.stringify(fields),
    method: "POST",
  });
  if (res.status === 401) {
    setLoginFormError(true);
    return;
  }
  const parsedResponse = await res.json();
  setLoginFormError(false);
  userContext.dispatch({ type: "login", user: parsedResponse.user });
  router.push("/");
};
