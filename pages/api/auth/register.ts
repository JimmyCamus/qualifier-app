import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../lib/types/user.type";

type Data = {
  user: User | {};
};

const Register = async (
  req: NextApiRequest,
  res: NextApiResponse<Data | null>
) => {
  const { username, email, password } = req.body;

  const response = await fetch(`${process.env.SERVER_URL}/users/signup`, {
    body: JSON.stringify({ username, email, password }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status !== 201) {
    res.status(response.status).json({ user: {} });
    return;
  }

  const userData: User = await response.json();
  res.status(201).json({ user: userData });
};

export default Register;
