const { binary } = require("joi");

module.exports = {
    "/books": {
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
        },
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
        },
        put: {
            tags: ['book'],
            summary: "Update book information.",
            operationId: 'updateBook',
            security: [{
                bearerAuth: []
            }],
            requestBody: {
                content: {
                    'multipart/form-data': {
                        schema: {
                            type: 'object',
                            properties: {
                                _id: {
                                    type: 'string',
                                    nullable: false,
                                    example: '5fcc67bcc634c26c3f4f0965'
                                },
                                bookName: {
                                    type: 'string',
                                    example: 'bangla'
                                },
                                author: {
                                    type: 'string',
                                    example: 'david milar'
                                },

                                genre: {
                                    type: 'string',
                                    example: 'romantic,horror'
                                },
                                releaseDate: {
                                    type: 'string',
                                    example: '2018'
                                },
                                isActivate: {
                                    type: 'boolean',
                                    example: false
                                }
                            }
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

    "/books/{id}": {
        delete: {
            tags: ['book'],
            summary: "Delete book from existing resource.",
            operationId: 'deleteBook',
            security: [{
                bearerAuth: []
            }],
            parameters: [{
                name: 'id',
                in: 'path',
                schema: {
                    type: 'string',
                    example: '5fc9d4a030adc9353c6494e3'
                },
                required: true,
            }],
            responses: {
                200: {
                    description: 'success',
                    content: {
                        'application/json': {
                            example: 'Document deleted successfully!'
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
                },
                400: {
                    description: 'Invalid parameters',
                    content: {
                        'application/json': {
                            example: 'Document not found with the given id or already been deleted!'

                        }
                    }
                }
            }
        }
    }
}
