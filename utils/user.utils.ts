import { IncomingMessage } from "http";
import { NextApiRequestCookies } from "next/dist/server/api-utils";
import { User } from "../lib/types/user.type";

export const getUser = async (
  req: IncomingMessage & { cookies: NextApiRequestCookies }
): Promise<User | {}> => {
  const { token } = req.cookies;

  if (!token) return {};

  try {
    const userDataResponse = await fetch(
      `${process.env.SERVER_URL}/auth/profile`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "aplication/json",
          "Content-Type": "application/json",
        },
      }
    );

    const user = await userDataResponse.json();

    return user;
  } catch (error) {
    console.error(error);
    return {};
  }
};
