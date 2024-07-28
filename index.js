const express = require("express");
const dotenv = require("dotenv");
const quoteRoute = require("./routes/QuoteRoute");
const cors = require("cors");
const connectDb = require("./utils/connectDb");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
dotenv.config();

connectDb();

app.use(express.json());

app.use(cors({ origin: "*" }));
app.use("/api/v1", quoteRoute);

app.use(errorHandler);

const port = process.env.PORT;

app.all("*", (req, res) => {
  res.status(404).send("Resource not found");
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port} `);
});
