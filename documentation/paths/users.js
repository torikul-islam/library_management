module.exports = {
    "/users/login": {
        post: {
            tags: ['users'],
            summary: "Login existing users",
            operationId: 'loginUsers',
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            properties: {
                                type: 'object',
                                username: {
                                    type: 'string',
                                    default: 'admin'
                                },
                                password: {
                                    type: 'string',
                                    default: '124575'
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
                            example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNjOWQxNTdhY2U4ZmVlZjliZWQxZDciLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImxpYnJhcmlhbiIsImlhdCI6MTYwNzI1MDE4NCwiZXhwIjoxNjA3MzM2NTg0fQ.PAwrsTh79QmCsWEmfWg58smKIU4uObgqMfLgtjNiigY'
                        }
                    }
                },
                400: {
                    description: 'Invalid parameters',
                    content: {
                        'application/json': {

                            example: 'Invalid username or password.'

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
