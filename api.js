module.exports = function api(options) {

  this.add('role:api,path:humiditysensors', function (msg, respond) {
    var args = msg.args;
    var sensorName = args.body.sensorName
    var humidity = args.body.humidity
    this.act('role:humiditySensorMeasuerement,cmd:create', {
      sensorName:  sensorName,
      humidity: humidity,
    }, respond)
  })

  this.add('role:api,path:humidity', function (msg, respond) {
    var args = msg.args;
    var limit = args.query.limit;
    var property = args.query.property;
    this.act('role:humiditySensorMeasuerement,cmd:getAll',
    {
      limit:limit,
      property:property}
      , respond)
  })


  this.add('init:api', function (msg, respond) {
    this.act('role:web',{routes:{
      prefix: '/api',
      pin:    'role:api,path:*',
      map: {
        humiditysensors: { POST:true },
        humidity: { GET:true }
        
      }
    }}, respond)
  })

}