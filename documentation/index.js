const schemas = require('./schemas');
const paths = require('./paths');

module.exports = {
    openapi: '3.0.1',
    info: {
        title: 'iqra',
        description: 'Online education learning platform',
        // termsOfService: '',
        // contact: {
        //     name: 'Wolox',
        //     email: 'tls@wolox.com.ar',
        //     url: 'https://www.wolox.com.ar/'
        // },
        // license: {
        //     name: 'MIT'
        // },
    },
    servers: [
        {
            url: 'http://apibeta.iqra-live.com/api/v1',
            description: 'Production server'
        }
    ],
    paths,
    components: {
        schemas
        // securitySchemes: {
        //     ApiKeyAuth: {
        //         type: 'apiKey',
        //         in: 'header',
        //         name: 'x-api-key'
        //     }
        // }
    }


};