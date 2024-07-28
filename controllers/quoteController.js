const QuoteModel = require("../models/QuoteModel");

// @desc    Get all the quotes
// @route   GET /api/v1/quotes
// @access  Public
const getQuotesFromDb = async (req, res) => {
  const quotes = await QuoteModel.find();

  res.status(200).send({
    success: true,
    total: quotes.length,
    quotes,
  });
};

// @desc    Search all the quotes
// @route   GET /api/quotes/search?query=
// @access  Public
const searchQuotes = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res
        .status(400)
        .send({ success: false, message: "Please provide a search query." });
    }

    const quotes = await QuoteModel.find({
      $or: [
        { quote: { $regex: query, $options: "i" } },
        { author: { $regex: query, $options: "i" } },
        { book: { $regex: query, $options: "i" } },
      ],
    });

    if (quotes.length > 0) {
      res.status(200).json({
        success: true,
        query: query,
        total: quotes.length,
        data: quotes,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "No result found",
      });
    }
  } catch (error) {
    console.error(error);
  }
};

// @desc    Get random quote
// @route   GET /api/v1/random
// @access  Public
const getRandomQuoteFromDb = async (req, res) => {
  const quotes = await QuoteModel.find();
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  res.status(200).send(randomQuote);
};

// @desc    Get all the quotes
// @route   POST /api/v1/quote
// @access  Public
const createQuoteInDb = async (req, res) => {
  try {
    const { quote, book, author } = req.body;

    if (!quote || !book || !author) {
      res.status(401).send("Error: All fields are required.");
    }

    const newQuote = await QuoteModel.create({
      quote,
      book,
      author,
      length: quote.length,
      words: quote.split(" ").length,
    });

    res.status(201).json({
      success: true,
      message: "Quote has been added!",
      data: newQuote,
    });
  } catch (error) {
    console.log("Could not create a quote :(", error);
    res.status(400).send({ success: false });
  }
};

module.exports = {
  getQuotesFromDb,
  getRandomQuoteFromDb,
  createQuoteInDb,
  searchQuotes,
};
