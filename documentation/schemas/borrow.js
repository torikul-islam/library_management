module.exports = {
    borrowBook: {
        required: [
            "book"
        ],
        type: "object",
        properties: {
            book: {
                type: 'string',
                example: '5fcc67bcc634c26c3f4f0965'
            }
        }
    },

}