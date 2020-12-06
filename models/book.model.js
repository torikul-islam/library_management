const Joi = require('joi');
const mongoose = require('mongoose');
const { Schema } = mongoose;



const bookSchema = new Schema({
    bookName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 255
    },
    author: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 255
    },
    genre: {
        type: Array,
        validate: {
            validator: function (v) {
                return v && v.length > 0;
            },
            message: 'A book should have at least one genre.'
        }
    },
    releaseDate: {
        type: String,
        required: true,
    },
    bookImage: {
        type: String,
        required: true,
        trim: true,
    },
    isActivate: {
        type: Boolean,
        default: false,
        required: true
    }
});



const Book = mongoose.model('Book', bookSchema);


function validateBook(book) {
    const schema = Joi.object({
        bookName: Joi.string().min(3).max(50).required(),
        author: Joi.string().min(2).max(50).required(),
        genre: Joi.array().items(Joi.string().required()).unique((a, b) => a === b),
        releaseDate: Joi.date().required(),
        bookImage: Joi.object().required(),
        isActivate: Joi.boolean().default(false)
    });

    return schema.validate(book, {
        abortEarly: false, errors: {
            wrap: {
                label: ''
            }
        }
    });
}


module.exports.bookSchema = bookSchema;
module.exports.Book = Book;
module.exports.validate = validateBook;