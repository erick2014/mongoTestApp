//enablel ES6 using strict mode
'use strict'
/*This route will controll the route for users */

//include the users controller
var test=require("../controllers/test.server.controller");
//export the route passing it the app object
module.exports=function(app){

  //enable posts route
  app.route('/testData')
  .get(test.genTestData);

  //enable posts route
  app.route('/testObj')
  .get(test.listPostObj)

  app.route("/testStr")
   .get(test.listPostStr);

  //error middleware handler
  app.use(function(err,req,res,next){
    res.send(err);
  })

}