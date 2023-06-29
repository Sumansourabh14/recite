const express = require("express");
const dotenv = require("dotenv");
const quoteRoute = require("./routes/QuoteRoute");
const cors = require("cors");

const app = express();
dotenv.config();

app.use(cors({ origin: process.env.FRONTEND_URI }));
app.use("/", quoteRoute);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`listening on http://localhost:${port} `);
});
