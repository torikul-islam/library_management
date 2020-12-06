module.exports = {
    "/books/": {
        get: {
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
                                items: {
                                    $ref: '#/components/schemas/books'
                                }
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
    "/books": {
        post: {
            tags: ['book'],
            summary: "Create new book resource.",
            operationId: 'newBook',
            security: [{
                bearerAuth: []
            }],
            requestBody: {
                content: {
                    'multipart/form-data': {
                        schema: {
                            $ref: '#/components/schemas/books'
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
                                $ref: '#/components/schemas/books'
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
    }
}
