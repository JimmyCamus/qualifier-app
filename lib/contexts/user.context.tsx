import { useRouter } from "next/router";
import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import { Action, User } from "../types/user.type";

const userReducer = (user: User | {}, action: Action) => {
  switch (action.type) {
    case "login": {
      return action.user;
    }
    case "singout": {
      return {} as User;
    }
    default: {
      throw new Error(`Unhandle action type ${action.type}`);
    }
  }
};

export const UserContext = createContext({
  user: {},
  dispatch: (() => undefined) as Dispatch<Action>,
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, dispatch] = useReducer(userReducer, {});
  const value = { user, dispatch };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useAuth must be used WITHIN an AuthProvider");
  }
  return context;
};

export const ProtectedRoute = ({ children }: any) => {
  const userContext = useUser();
  const router = useRouter();
  const userData = userContext.user as User;

  if (!userData.id) {
    router.push("/login");
    return;
  }

  return children;
};
