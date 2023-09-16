const express = require("express");
const {
  getQuotes,
  getRandomQuote,
  createQuote,
  deleteQuote,
} = require("../controllers/quoteController");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome!");
});
router.get("/quotes", getQuotes);
router.get("/random/quote", getRandomQuote);

router.post("/quote", createQuote);
router.delete("/quote/:id", deleteQuote);

module.exports = router;
