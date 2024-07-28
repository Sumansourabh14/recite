const notFound = (req, res, next) => {
  const error = new Error("Resource not found");
  error.status = 404;
  return next(error);
};

module.exports = notFound;
