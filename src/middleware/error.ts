import { NextFunction, Response, Request } from 'express';

const handleError = (err: any, res: Response) => {
  const { statusCode, message } = err;
  const httpCode = statusCode || 500;
  return res.status(httpCode).json({
    success: false,
    statusCode: httpCode,
    message: httpCode === 500 ? 'Internal server error' : message,
  });
};

export default function (error, req: Request, res: Response, next: NextFunction) {
  handleError(error, res);
}
