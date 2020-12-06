module.exports = {
    users: {
        required: [
            "username",
            "password",
            "role"
        ],
        type: "object",
        properties: {
            username: {
                type: 'string',
                example: 'admin'
            },
            password: {
                type: 'string',
                example: '124575'
            },
            role: {
                type: 'string',
                example: 'student',
                default: 'student',
                field: ['librarian', 'student']
            }
        }
    }
}