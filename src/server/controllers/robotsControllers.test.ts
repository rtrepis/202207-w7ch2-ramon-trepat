import { Request, Response } from "express";
import Robot from "../../database/models/Robot";
import { getRobots } from "./robotsControllers";

describe("Given the getRobots controller", () => {
  describe("When it recieves a response", () => {
    test("Then it should call the response method status with 200", async () => {
      const req: Partial<Request> = {};
      const res: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const status = 200;

      Robot.find = jest.fn();

      await getRobots(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(status);
    });

    describe("And Robot.find return a list with Mazinger and Optimus", () => {
      test("Then it should call the response method json with Mazinger and Optimus", async () => {
        const req: Partial<Request> = {};
        const res: Partial<Response> = {
          status: jest.fn().mockReturnThis(),
          json: jest.fn(),
        };
        const robotList = [
          {
            name: "Mazinger",
          },
          {
            name: "Optimus",
          },
        ];

        Robot.find = jest.fn().mockResolvedValue(robotList);

        await getRobots(req as Request, res as Response);

        expect(res.json).toHaveBeenCalledWith({ robots: robotList });
      });
    });
  });
});
