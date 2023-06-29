const quotes = require("../content/quotes.json");

const getQuotes = (req, res) => {
  res.send({
    total: quotes.length,
    quotes,
  });
};

const getRandomQuote = (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  res.status(200).send(randomQuote);
};

module.exports = { getQuotes, getRandomQuote };
