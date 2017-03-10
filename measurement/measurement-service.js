var seneca = require('seneca')();
var config = require('./config');

seneca
    .use('measurement-crud')
    .use('basic')
    .use('entity')
    .use('mongo-store', {
        uri: config.database
    })

    .listen({
        port: 9001
    });