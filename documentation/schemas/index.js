const hadith = require('./users');
const books = require('./books');
const borrow = require('./borrow');



module.exports = {
    ...hadith, ...books, ...borrow,
    Error: {
        type: 'object',
        properties: {
            type: 'string'

        }
    }
};