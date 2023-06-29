const express = require("express");
const dotenv = require("dotenv");
const quoteRoute = require("./routes/QuoteRoute");

const app = express();
dotenv.config();

const port = process.env.PORT;

app.use("/", quoteRoute);

app.listen(port, () => {
  console.log(`listening on http://localhost:${port} `);
});
