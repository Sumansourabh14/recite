// const quotes = require("../content/quotes.json");
const path = require("path");
const fs = require("fs");

const quotesFilePath = path.resolve("./") + "\\content\\quotes.json";

const getQuotes = (req, res) => {
  const quotesFileContent = fs.readFileSync(quotesFilePath);
  const quotes = JSON.parse(quotesFileContent);

  res.send({
    total: quotes.length,
    quotes,
  });
};

console.log(new Date());

const getRandomQuote = (req, res) => {
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

module.exports = { getQuotes, getRandomQuote, createQuote, deleteQuote };
