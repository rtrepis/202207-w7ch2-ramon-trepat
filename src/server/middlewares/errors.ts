import { Request, Response } from "express";

export const endpointError = (req: Request, res: Response) => {
  res.status(404).json({ error: "Endpoint not found" });
};

export default endpointError;
