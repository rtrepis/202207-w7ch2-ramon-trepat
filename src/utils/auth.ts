import "../loadEnvironment";
import jwt from "jsonwebtoken";
import { IpayLoad } from "../server/types/userType";

export const createToken = (payLoad: IpayLoad) =>
  jwt.sign(payLoad, process.env.KEY);

export const verifyToken = (token: string) =>
  jwt.verify(token, process.env.KEY);
