import { Request, Response } from "express";
import { endpointError } from "./errors";

describe("Given the endpointError middleware", () => {
  describe("When it receives a response", () => {
    test("Then it should call the response method status with 404", async () => {
      const req: Partial<Request> = {};
      const res: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const status = 404;

      endpointError(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(status);
    });

    test("Then it should call the response method json with an endpoint error", async () => {
      const req: Partial<Request> = {};
      const res: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const error = { error: "Endpoint not found" };

      endpointError(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(error);
    });
  });
});
