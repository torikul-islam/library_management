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
            bookImage: {
                type: 'file',
                nullable: false
            },
            genre: {
                type: 'string',
                example: 'romantic,horror'
            },
            releaseDate: {
                type: 'string',
                example: '2018'
            }
        }
    }
}