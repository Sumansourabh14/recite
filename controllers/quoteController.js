// const quotes = require("../content/quotes.json");
const path = require("path");
const fs = require("fs");
const QuoteModel = require("../models/QuoteModel");

// const quotesFilePath = path.resolve("./") + "\\content\\quotes.json";
const quotesFilePath = path.resolve("./") + "/content/quotes.json";

const getQuotes = (req, res) => {
  const quotesFileContent = fs.readFileSync(quotesFilePath);
  const quotes = JSON.parse(quotesFileContent);

  res.send({
    total: quotes.length,
    quotes,
  });
};

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

const getRandomQuote = (req, res) => {
  const quotesFileContent = fs.readFileSync(quotesFilePath);
  const quotes = JSON.parse(quotesFileContent);
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  res.status(200).send(randomQuote);
};

const getRandomQuoteFromDb = async (req, res) => {
  const quotes = await QuoteModel.find();
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  res.status(200).send(randomQuote);
};

const createQuote = (req, res) => {
  const { quote, book, author } = req.body;

  if (!quote || !book || !author) {
    res.status(401).send("Error: All fields are required.");
  } else {
    const newQuote = {
      id: new Date().getTime().toString(),
      data: {
        quote,
        book,
        author,
        length: quote.length,
        words: quote.split(" ").length,
        createdAt: new Date(),
      },
    };

    // read file
    const quotesContent = fs.readFileSync(quotesFilePath);

    // alter data
    const quotes = JSON.parse(quotesContent);
    quotes.push(newQuote);

    // write file
    fs.writeFileSync(quotesFilePath, JSON.stringify(quotes));

    res.status(201).send({
      status: "success",
      message: "Quote has been added.",
      data: newQuote,
    });
  }
};

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

const updateQuote = (req, res) => {
  const { id } = req.params;

  const quotes = JSON.parse(fs.readFileSync(quotesFilePath));
  quotes.map((quote, index) => {
    if (quote.id === id) {
      quote.data = { ...quote.data, ...req.body, updatedAt: new Date() };
    }
  });

  fs.writeFileSync(quotesFilePath, JSON.stringify(quotes));

  res.send({
    status: "success",
    message: `Quote with ${id} has been successfully updated`,
  });
};

const deleteQuote = (req, res) => {
  const { id } = req.params;
  console.log(id);

  const quotes = JSON.parse(fs.readFileSync(quotesFilePath));

  const updatedQuotes = quotes.filter((quote) => id !== quote.id);

  fs.writeFileSync(quotesFilePath, JSON.stringify(updatedQuotes));

  res.send({
    status: "success",
    message: `Quote with ${id} has been successfully deleted.`,
  });
};

module.exports = {
  getQuotes,
  getQuotesFromDb,
  getRandomQuote,
  getRandomQuoteFromDb,
  createQuote,
  createQuoteInDb,
  updateQuote,
  deleteQuote,
  searchQuotes,
};
