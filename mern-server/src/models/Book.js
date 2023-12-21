const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
   bookTitle: {
      type: String,
      required: true,
   },
   authorName: {
      type: String,
   },
   imageURL: {
      type: String,
      required: true,
   },
   category: {
      type: String,
   },
   bookDescription: {
      type: String,
      required: true,
   },
   bookPDFURL: {
      type: String,
   },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
