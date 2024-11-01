const express = require("express");
const dotenv = require("dotenv");
const quoteRoute = require("./routes/QuoteRoute");
const cors = require("cors");
const connectDb = require("./utils/connectDb");
const errorHandler = require("./middlewares/errorHandler");
const notFound = require("./middlewares/notFound");
const apiRequestLimiter = require("./middlewares/rateLimit");
const { reloadService, interval } = require("./utils/reloaderFunction");

const app = express();
dotenv.config();

connectDb();

setInterval(reloadService, interval);

app.use(express.json());

app.use(cors({ origin: "*" }));

app.use(apiRequestLimiter);
app.use("/api/v1", quoteRoute);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`listening on http://localhost:${port} `);
});
