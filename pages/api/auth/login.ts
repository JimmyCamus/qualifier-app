import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
import { User } from "../../../lib/types/user.type";

type Data = {
  user: User;
};

const Login = async (
  req: NextApiRequest,
  res: NextApiResponse<Data | null>
) => {
  const { username, password } = JSON.parse(req.body);

  const response = await fetch(`${process.env.SERVER_URL}/auth/login`, {
    body: JSON.stringify({ username, password }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const parsedResponse = await response.json();

  if (!parsedResponse.access_token) {
    res.status(401).json(null);
    return;
  }

  const userDataResponse = await fetch(
    `${process.env.SERVER_URL}/auth/profile`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${parsedResponse.access_token}`,
        Accept: "aplication/json",
        "Content-Type": "application/json",
      },
    }
  );

  const userData: User = await userDataResponse.json();

  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", parsedResponse.access_token, {
      httpOnly: true,
      path: "/",
    })
  );

  res.status(200).json({ user: userData });
};

export default Login;
