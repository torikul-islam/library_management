const Joi = require('joi');
const mongoose = require('../db');
const { Schema } = mongoose;
const { bookSchema } = require('./book.model');
const { usersSchema } = require('./users.model');


const borrowSchema = new Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String,
        enum: ['approved', 'pending'],
        default: 'approved'
    },
    borrowTime: {
        type: Date,
        default: Date.now
    },
    returnTime: {
        type: Date,
        default: +new Date() + 7 * 24 * 60 * 60 * 1000
    }

});


const BorrowBook = mongoose.model('BorrowBook', borrowSchema);



module.exports.BorrowBook = BorrowBook;