const path = require('path');
const express = require('express');
const router = express.Router();
const { Book, validate } = require('../models/book.model');
const auth = require("../middleware/auth");
const librarian = require("../middleware/librarian");


router.get('/', [auth], async (req, res) => {
    let { page = 1, take = 10 } = req.query;
    page = parseInt(page);
    take = parseInt(take);

    const books = await Book
        .find({ isActivate: false })
        .select('-__v')
        .skip((page - 1) * take)
        .limit(take)

    res.status(200).send(books);
});

router.post('/', [auth, librarian], async (req, res) => {
    if (req.body['genre']) req.body['genre'] = JSON.parse(req.body['genre']);

    let { error, value } = validate({ ...req.body, bookImage: req.files });
    if (error) return res.status(400).send({ message: error.details.map(x => x.message) });

    let { bookName, author, genre, releaseDate, bookImage, isActivate } = req.body;
    const img = req.files.bookImage;
    bookImage = 'uploads/' + Date.now() + '_' + Math.round(Math.random() * 1E9) + path.extname(img.name);

    let book = new Book({
        bookName, author, genre,
        releaseDate,
        bookImage,
        isActivate
    });

    try {
        img.mv(bookImage);
        await book.save();
        res.send(book);
    } catch (ex) {
        res.status(400).send({ status: 400, message: ex.message });
    }

});

router.put('/', [auth, librarian], async (req, res) => {
    const { _id, ...rest } = req.body;

    const book = await Book.findOneAndUpdate(req.body._id, {
        ...rest
    }, { new: true })
    res.send(book)

});

router.delete('/:id', [auth, librarian], async (req, res) => {
    const { id } = req.params;

    try {
        const book = await Book.findByIdAndRemove(id);

        if (!book) return res.status(400).send('Document not found with the given id or already been deleted!');
        res.send('Document deleted successfully!');

    } catch (ex) {
        rest.status(400).send(ex.message);
    }
});


module.exports = router;