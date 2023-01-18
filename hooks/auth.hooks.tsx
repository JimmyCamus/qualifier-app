import { NextRouter } from "next/router";
import { ContextType, Dispatch, SetStateAction } from "react";
import { UserContext } from "../lib/contexts/user.context";
import {
  LoginFormFieldsType,
  RegisterFormFieldsType,
} from "../lib/types/entries.type";
import { User, UserRole } from "../lib/types/user.type";

export const useLogout = () => useHandleLogout;

const useHandleLogout = async (
  userContext: ContextType<typeof UserContext>,
  router: NextRouter
) => {
  await fetch(`/api/auth/logout`);
  userContext.dispatch({ type: "login", user: {} });
  router.push("/");
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
  const { user }: { user: User } = await res.json();
  setLoginFormError(false);
  userContext.dispatch({ type: "login", user: user });
  if (user.role === UserRole.ADMIN) {
    router.push("/admin");
    return;
  }
  router.push("/");
};

export const useRegister = () => useHandleRegister;

const useHandleRegister = async (
  fields: RegisterFormFieldsType
): Promise<number> => {
  const res = await fetch(`/api/auth/register`, {
    body: JSON.stringify(fields),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.status !== 201) {
    console.error("Something when wrong");
  }
  return res.status;
};
