const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema(
  {
    quote: {
      type: String,
      required: true,
    },
    book: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
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
