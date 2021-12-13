export class BadException extends Error {
  private statusCode: number;
  constructor(statusCode, message) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);

    this.statusCode = statusCode;

    Error.captureStackTrace(this);
  }
}
