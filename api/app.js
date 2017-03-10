var SenecaWeb = require('seneca-web')
var Express = require('express')
var Router = Express.Router
var context = new Router()
var cors = require('cors');

var senecaWebConfig = {
      context: context,
      adapter: require('seneca-web-adapter-express'),
      options: { parseBody: true } // so we can use body-parser
}

var app = Express()
      .use(cors())
      .use( require('body-parser').urlencoded({ extended: false }) )
      .use( context )
      .listen(3000)

var seneca = require('seneca')()
      .use('basic')
      .use("entity")
      .use(SenecaWeb, senecaWebConfig )
      .use('api')
      .client({
    host: process.env.PROXY_HOST, 
    port: process.env.measurement_PORT,
    pin: 'role:humiditySensorMeasuerement'
  })