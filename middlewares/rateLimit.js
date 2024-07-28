const rateLimit = require("express-rate-limit");

const apiRequestLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 250, // limit each IP to 250 requests per windowMs
  handler: function (req, res, next) {
    const error = new Error(
      "You sent too many requests. Please wait a while then try again"
    );
    error.status = 429;
    return next(error);
  },
});

module.exports = apiRequestLimiter;
