import CustomError from "../server/types/serverTypes";

const createCustomError = (
  code: number,
  publicMessage: string,
  privatMessage: string
) => {
  const error = new Error() as CustomError;
  error.code = code;
  error.publicMessage = publicMessage;
  error.privatMessage = privatMessage;
  return error;
};

export default createCustomError;
