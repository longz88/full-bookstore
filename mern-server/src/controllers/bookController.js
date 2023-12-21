const Book = require('../models/Book');

const bookController = {
   addABook: async (req, res) => {
      try {
         const newBook = await Book(req.body);
         const savedBook = await newBook.save();
         res.status(200).json(savedBook);
      } catch (err) {
         res.status(500).json(err);
      }
   },

   getAllBooks: async (req, res) => {
      try {
         const books = await Book.find();
         res.status(200).json(books);
      } catch (err) {
         res.status(500).json(err);
      }
   },

   getABook: async (req, res) => {
      try {
         const book = await Book.findById(req.params.id);
         res.status(200).json(book);
      } catch (err) {
         res.status(500).json(err);
      }
   },

   updateBook: async (req, res) => {
      try {
         await Book.findByIdAndUpdate(req.params.id, { $set: req.body });
         res.status(200).json('Updated successfully !!!!');
      } catch (err) {
         res.status(500).json(err);
      }
   },

   deleteBook: async (req, res) => {
      try {
         await Book.findByIdAndDelete(req.params.id);
         res.status(200).json('Deleted successfully !!!!');
      } catch (err) {
         res.status(500).json(err);
      }
   },
};

module.exports = bookController;
