const express = require('express');
const router = express.Router();
const { BorrowBook } = require('../models/borrow.model');
const auth = require("../middleware/auth");
const { Book } = require('../models/book.model');
const student = require('../middleware/student');



router.get('/:id/book', [auth], async (req, res) => {
    const { id } = req.params;
    const borrow = await BorrowBook
        .findOne({ book: id, user: req.user._id })
        .select('-__v')
        .sort('-borrowTime')
        .populate('book', '-__v')
        .populate('user', 'username role')


    if (!borrow) return res.status(400).send('Document not found the given id');

    res.send(borrow)
});

router.post('/books', [auth, student], async (req, res) => {
    const books = await Book.find({});
    const userId = req.user._id;

    try {
        books.forEach(async el => {
            const bookObj = new BorrowBook({ book: el._id, user: userId });
            await bookObj.save();
        });

        res.send('All book requested successfully.')
    } catch (ex) {
        res.status(400).send(ex.message)
    }
});


router.get('/books', [auth], async (req, res) => {

    try {
        const allBooks = await BorrowBook.find({ returnTime: { $gte: new Date() } })
            .select('-__v]')
            .sort('borrowTime')
            .populate('book', '-__v')

        res.send(allBooks);
    } catch (ex) {
        res.status(400).send(ex.message)
    }

});


router.post('/book', [auth, student], async (req, res) => {
    const { book, user } = req.body;
    const borrowBook = new BorrowBook({
        book, user: req.user._id
    });

    try {
        await borrowBook.save();
        res.send(borrowBook);
    } catch (ex) {
        res.status(400).send(ex.message)
    }
});




module.exports = router;