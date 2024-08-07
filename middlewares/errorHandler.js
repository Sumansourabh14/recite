const errorHandler = (error, req, res, next) => {
  if (error.status) {
    res
      .status(error.status)
      .json({ success: false, status: error.status, error: error.message });
  } else {
    res.status(500).send(error.message);
  }
};

module.exports = errorHandler;
