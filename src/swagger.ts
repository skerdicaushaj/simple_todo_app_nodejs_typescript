import { Options } from 'swagger-jsdoc';

const options: Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My API',
            version: '1.0.0',
        },
        components: {
            securitySchemes: {
                ApiKeyAuth: {
                  type: 'apiKey',
                  in: 'header',
                  name: 'x-api-key',
                }},
            schemas: {
                Todo: {
                    type: 'object',
                    properties: {
                        // Define properties of the Todo model
                        id: {
                            type: 'string',
                            description: 'Unique identifier of the todo',
                        },
                        name: {
                            type: 'string',
                            description: 'Name of the todo',
                        },
                        description: {
                            type: 'string',
                            description: 'Description of the todo',
                        },
                        status: {
                            type: 'boolean',
                            description: 'Status of the todo',
                        },
                    },
                },
                TodoInput: {
                    type: 'object',
                    properties: {
                        // Define properties of the Todo model
                        name: {
                            type: 'string',
                            description: 'Name of the todo',
                        },
                        description: {
                            type: 'string',
                            description: 'Description of the todo',
                        },
                        status: {
                            type: 'boolean',
                            description: 'Status of the todo',
                        },
                    },
                },
            },
        },
    },
    apis: ['./src/routes/*.ts'], // Update this with the appropriate glob pattern to match your API route files
};

export default options;
