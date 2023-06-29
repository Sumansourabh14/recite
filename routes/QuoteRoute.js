const express = require("express");
const { getQuotes, getRandomQuote } = require("../controllers/quoteController");
const router = express.Router();

router.get("/quotes", getQuotes);
router.get("/random/quote", getRandomQuote);

module.exports = router;
