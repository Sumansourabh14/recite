const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema(
  {
    quote: {
      type: String,
    },
    book: {
      type: String,
    },
    author: {
      type: String,
    },
    length: {
      type: Number,
    },
    words: {
      type: Number,
    },
  },
  { timestamps: true }
);

const QuoteModel = mongoose.model("quote", quoteSchema);
module.exports = QuoteModel;
