// custom error class
class APIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.name = "APIError";
  }
}

// async wrapper
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// global error handler
const globalErrorhandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err instanceof APIError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  if (err.name === "ValidationError") {
    return res.status(400).json({
      status: "error",
      message: "Validation error",
    });
  }

  return res.status(500).json({
    status: "error",
    message: "An unexpected error occurred",
  });
};

module.exports = { APIError, asyncHandler, globalErrorhandler };
