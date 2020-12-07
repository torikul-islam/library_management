const { binary } = require("joi");



module.exports = {
    "/borrow/book": {
        post: {
            tags: ['borrow'],
            summary: "Request for a book",
            operationId: 'reqBook',
            security: [{
                bearerAuth: []
            }],
            requestBody: {
                content: {
                    'multipart/form-data': {
                        schema: {
                            $ref: '#/components/schemas/borrowBook'
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
    },

    "/borrow/books": {
        post: {
            tags: ['borrow'],
            summary: "Request for all books",
            operationId: 'allBook',
            security: [{
                bearerAuth: []
            }],

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
        },
        get: {
            tags: ['borrow'],
            summary: "get user all requested books.",
            operationId: 'getAllBooks',
            security: [{
                bearerAuth: []
            }],

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
    "/borrow/{id}/book": {
        get: {
            tags: ['borrow'],
            summary: "get for a single book",
            operationId: 'singleBook',
            security: [{
                bearerAuth: []
            }],
            parameters: [{
                name: 'id',
                in: 'path',
                schema: {
                    type: 'string',
                    example: '5fcc67bcc634c26c3f4f0965'
                },
                required: true,
            }],
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
                400: {
                    description: 'Invalid parameters',
                    content: {
                        'application/json': {
                            example: 'Document not found the given id'
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
}
