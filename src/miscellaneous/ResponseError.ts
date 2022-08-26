export class ResponseError extends Error {
    statusCode = 400;
  
    constructor(message: string, statusCode: number) {
      super(message);
      this.statusCode = statusCode;
  
      Object.setPrototypeOf(this, ResponseError.prototype);
    }
  
    getErrorMessage(): string {
      return 'Something went wrong: ' + this.message;
    }
  }