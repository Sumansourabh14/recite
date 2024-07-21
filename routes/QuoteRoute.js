const express = require("express");
const {
  getQuotes,
  getRandomQuote,
  createQuote,
  deleteQuote,
  updateQuote,
  createQuoteInDb,
  getQuotesFromDb,
  getRandomQuoteFromDb,
  searchQuotes,
} = require("../controllers/quoteController");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

router.get("/quotes", getQuotes);
router.get("/quotes-from-db", getQuotesFromDb);
router.get("/random/quote", getRandomQuote);
router.get("/random/quote-from-db", getRandomQuoteFromDb);
router.get("/quotes/search", searchQuotes);

router.post("/quote", createQuote);
router.post("/quote-in-db", createQuoteInDb);
router.put("/quote/:id", updateQuote);
router.delete("/quote/:id", deleteQuote);

module.exports = router;
