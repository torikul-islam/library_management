const hadith = require('./hadith');



module.exports = {
    ...hadith,
    Error: {
        type: 'object',
        properties: {
            message: {
                type: 'string'
            }
        }
    }
};