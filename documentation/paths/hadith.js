module.exports = {
    "/hadith": {
        get: {
            tags: ['hadith'],
            summary: "Finds hadith with defined pagination and page limit",
            operationId: 'getHadith',
            parameters: [{
                name: 'page',
                in: 'query',
                schema: {
                    type: 'integer',
                    default: 1
                },
                required: true,
            }, {
                name: 'pageSize',
                in: 'query',
                schema: {
                    type: 'integer',
                    default: 10
                },
                required: true,
            }],
            responses: {
                200: {
                    description: 'success',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/hadith'
                            }
                        }
                    }
                },
                400: {
                    description: 'Invalid parameters',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Error'
                            },
                            example: {
                                message: 'No hadith found'
                            }
                        }
                    }
                }
            }
        },
        post: {
            tags: ['hadith'],
            summary: "add a new hadith collection in hadith store",
            // description: 'Store new hadith',
            operationId: 'createHadith',
            parameters: [],
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/hadith'
                        }
                    }
                },
                required: true
            },
            responses: {
                201: {
                    description: 'New hadith was created',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/hadith'
                            }
                        }
                    }
                },
                400: {
                    description: 'Invalid parameters',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Error'
                            },
                            example: {
                                message: 'hadith_title cannot be null'
                            }
                        }
                    }
                }
            }
        }
    },
    "/hadith/chapter/{hadith_id}": {
        get: {
            tags: ['hadith'],
            summary: "Finds hadith chapter with defined hadith no",
            operationId: 'getHadithChapters',
            parameters: [{
                name: 'hadith_id',
                in: 'path',
                schema: {
                    type: 'integer',
                    default: 1
                },
                required: true,
            }],
            responses: {
                200: {
                    description: 'successfully operation',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/hadith'
                            }
                        }
                    }
                },
                400: {
                    description: 'Invalid parameters',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Error'
                            },
                            example: {
                                message: 'No chapter found with the hadith'
                            }
                        }
                    }
                }
            }
        }
    },
    "/hadith/chapter": {
        post: {
            tags: ['hadith'],
            summary: "add a new chapter collection in hadith chapter collection",
            operationId: 'createChapters',
            requestBody: {
                content: {
                    'multipart/form-data': {
                        schema: {
                            $ref: '#/components/schemas/hadithChapter'
                        }
                    }
                },
                required: true
            },
            responses: {
                201: {
                    description: 'New chapter was created',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/hadithChapter'
                            }
                        }
                    }
                },
                400: {
                    description: 'Invalid parameters',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Error'
                            },
                            example: {
                                message: 'chapter_title_en cannot be null'
                            }
                        }
                    }
                }
            }
        }
    },
}
