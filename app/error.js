const notFoundHandler = (_req, _res, next) => {
  const error = new Error("resource not found !!!");
  error.status = 404;
  next(error);
};

const ErrorHandler = (error, _req, res, _next) => {
  if (error.status) {
    return res.status(error.status).json({
      message: error.message,
    });
  }
  res.status(500).json({
    message: "server error occurs",
  });
};

module.exports = {
  notFoundHandler,
  ErrorHandler,
};
