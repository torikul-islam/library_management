const hadith = require('./users');
const books = require('./books');



module.exports = {
    ...hadith, ...books,
    Error: {
        type: 'object',
        properties: {
            type: 'string'

        }
    }
};