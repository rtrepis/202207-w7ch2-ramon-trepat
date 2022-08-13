import { Request, Response } from "express";
import CustomError from "../types/serverTypes";
import { endpointError, generalError } from "./errors";

describe("Given the endpointError middleware", () => {
  describe("When it receives a response", () => {
    const req: Partial<Request> = {};
    const res: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    test("Then it should call the response method status with 404", () => {
      const status = 404;

      endpointError(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(status);
    });

    test("Then it should call the response method json with an endpoint error", () => {
      const error = { error: "Endpoint not found" };

      endpointError(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(error);
    });
  });
});

describe("Give the generalErors", () => {
  const req: Partial<Request> = {};
  const res: Partial<Response> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const next = jest.fn();
  describe("Then it recives response with a custom error", () => {
    test("Then it should call the response with this error", () => {
      const error = new Error() as CustomError;
      error.code = 409;
      error.privatMessage = "Privat Message";
      error.publicMessage = "Public Message";

      generalError(error, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(error.code);
      expect(res.json).toHaveBeenCalledWith({ error: error.publicMessage });
    });

    describe("Then it recives response without a custom error", () => {
      test("Then it should call the response with error code 500 and 'There was an error' message", () => {
        const errorNull = new Error() as CustomError;
        errorNull.code = null;
        errorNull.privatMessage = null;
        errorNull.publicMessage = null;
        const expectCode = 500;
        const expectPublicMessage = "There was an error";

        generalError(errorNull, req as Request, res as Response, next);

        expect(res.status).toHaveBeenCalledWith(expectCode);
        expect(res.json).toHaveBeenCalledWith({ error: expectPublicMessage });
      });
    });
  });
});
