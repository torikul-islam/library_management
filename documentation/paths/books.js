module.exports = {
    "/books/": {
        post: {
            tags: ['book'],
            summary: "Get all book list",
            operationId: 'getAllBooks',
            security: [{
                bearerAuth: []
            }],
            parameters: [
                {
                    name: 'page',
                    in: 'query',
                    schema: {
                        type: 'integer',
                        default: 1
                    },
                    required: true,
                },
                {
                    name: 'take',
                    in: 'query',
                    schema: {
                        type: 'integer',
                        default: 10
                    },
                    required: true,
                }
            ],
            responses: {
                200: {
                    description: 'success',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'array',
                                ref: '#/components/schemas/books'
                            }
                        }
                    }
                },
                401: {
                    description: 'Invalid parameters',
                    content: {
                        'application/json': {
                            example: 'Access denied. No token provided.'
                        }
                    }
                }
            }
        }
    },
    "/users/register": {
        post: {
            tags: ['users'],
            summary: "Register new users",
            operationId: 'regisUsers',
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/users'
                        }
                    }
                },
                required: true
            },

            responses: {
                200: {
                    description: 'success',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/users'
                            }
                        }
                    }
                },
                400: {
                    description: 'Invalid parameters',
                    content: {
                        'application/json': {
                            example: 'User already registered.'

                        }
                    }
                }
            }
        }
    }
}
