const schemas = require('./schemas');
const paths = require('./paths');

module.exports = {
    openapi: '3.0.1',
    info: {
        title: 'Library management'
    },
    servers: [{
        url: 'https://gentle-plains-07058.herokuapp.com/',
        description: 'production server'
    }],
    paths,
    components: {
        schemas,
        "securitySchemes": {
            "bearerAuth": {
                "type": "http",
                "scheme": "bearer",
                "bearerFormat": "JWT"
            }
        }
    }


};