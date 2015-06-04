//if there is not an environment then set it
process.env.NODE_ENV= process.env.NODE_ENV || 'development'
//include the mongoose config file to get an instance
var mongoose=require('./config/mongoose')();

/*include the configuration file
  also load the route and its controller
*/
var app=require("./config/Express")();
//set a port to listen to
var port=3000;

//port to listen to
app.listen(port);
//show a message whe server is running
console.log("Server listening at port",port);