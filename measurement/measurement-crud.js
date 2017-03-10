module.exports = function (options) {

  this.add({
    "role": "humiditySensorMeasuerement",
    "cmd": "create"
  }, (args, done) => {
    var humiditySensorMeasuerement = this.make$("humiditySensorMeasuerement");
    humiditySensorMeasuerement.creationTime = new Date;
    humiditySensorMeasuerement.humidity = args.humidity;
    humiditySensorMeasuerement.sensorName = args.sensorName;
    humiditySensorMeasuerement.save$((err, savedProduct) => {
      done(err, savedProduct);
      console.log("######### Saved item: ",savedProduct, "##########");
    });
  });


  this.add({
    "role": "humiditySensorMeasuerement",
    "cmd": "getAll"
  }, (args, done) => {
    var humiditySensorMeasuerement = this.make$("humiditySensorMeasuerement");
    var limit = parseInt(args.limit) || 10;
    var property = args.property || humiditySensorMeasuerement.creationTime;
    console.log(args)
    humiditySensorMeasuerement.list$({
      property: property, 
      sort$:{creationTime:-1}, 
      limit$:limit},
      function (err, entity) { 
       done(err, entity);
     })
  });

}