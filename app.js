var SenecaWeb = require('seneca-web')
var Express = require('express')
var Router = Express.Router
var context = new Router()

var senecaWebConfig = {
      context: context,
      adapter: require('seneca-web-adapter-express'),
      options: { parseBody: true } // so we can use body-parser
}

var app = Express()
      .use( require('body-parser').urlencoded({ extended: false }) )
      .use( context )
      .listen(3000)

var seneca = require('seneca')()
      .use('basic')
      .use("entity")
      .use(SenecaWeb, senecaWebConfig )
      .use('api')
      .client({
    type: "tcp",
    port: 9001,
    pin: 'role:humiditySensorMeasuerement'
  })