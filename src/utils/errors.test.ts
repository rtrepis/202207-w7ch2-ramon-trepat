import CustomError from "../server/types/serverTypes";
import createCustomError from "./errors";

describe("Give a function createCustomError", () => {
  describe("When is invocate with a code, privat message and public message params", () => {
    test("Then should called return a object whith this three properties", () => {
      const expectCode = 400;
      const expectPrivatMessage = "This is private massage";
      const expectPublicMessage = "This is public massage";

      const expectError = new Error() as CustomError;
      expectError.code = expectCode;
      expectError.privatMessage = expectPrivatMessage;
      expectError.publicMessage = expectPublicMessage;

      const newError = createCustomError(
        expectCode,
        expectPrivatMessage,
        expectPublicMessage
      );

      expect(newError).toStrictEqual(expectError);
    });
  });
});
