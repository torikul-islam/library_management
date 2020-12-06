module.exports = {
    books: {
        required: [
            "bookName",
            "author",
            "genre",
            "bookImage",
            "releaseDate"
        ],
        type: "object",
        properties: {
            bookName: {
                type: 'string',
                example: 'bangla'
            },
            author: {
                type: 'string',
                example: 'david milar'
            },
            genre: {
                type: 'array',
                example: ['romantic', 'horror']
            },
            releaseDate: {
                type: 'string',

            }
        }
    }
}