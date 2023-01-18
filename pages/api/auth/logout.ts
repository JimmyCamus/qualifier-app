import cookie from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
};

const logout = async (
  req: NextApiRequest,
  res: NextApiResponse<Data | null>
) => {
  if (req.headers.token === "undefined") {
    res.status(400).json({ success: false });
    return {};
  }

  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", "", {
      httpOnly: true,
      path: "/",
      expires: new Date(0),
    })
  );

  res.status(200).json({ success: true });
};

export default logout;
