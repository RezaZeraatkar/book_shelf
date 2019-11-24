const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    name: {
      type: String,
      maxLength: 100,
      require: true
    },
    author: {
      type: String,
      maxLength: 100,
      require: true
    },
    review: {
      type: String,
      default: "N/A"
    },
    pages: {
      type: String,
      default: "N/A"
    },
    rating: {
      type: Number,
      require: true,
      min: true,
      max: 5
    },
    price: {
      type: String,
      default: "N/A"
    },
    ownerID: {
      type: String,
      require: true
    }
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = { Book };
