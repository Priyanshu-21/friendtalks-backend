// Set the rules for API error & use this when error occurs
class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      // Stack is empty and will capture a errror in stack
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
