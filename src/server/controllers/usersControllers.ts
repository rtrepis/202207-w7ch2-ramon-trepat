import { Request, Response } from "express";
import { createToken } from "../../utils/auth";
import { IpayLoad } from "../types/userType";

interface Iuser {
  userName: string;
  password: string;
}

const loginUser = (req: Request, res: Response) => {
  const user: Iuser = req.body;

  const payLoad: IpayLoad = {
    id: "223345533",
    userName: "llili",
  };

  const responseData = { user: { token: createToken(payLoad) } };

  res.status(200).json(responseData);
};

export default loginUser;
