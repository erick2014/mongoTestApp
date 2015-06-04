//load the cofing file for my current environment
const config=require("./config");
const mongoose=require('mongoose');

module.exports=function(){
  //try to connect to moongodb using the uri defined into development file
  var db=mongoose.connect(config.db);
  require("../models/postsTypeObj.server.model");
  require("../models/postsTypeStr.server.model");
  require("../models/author.server.model");
  //return a moongose instance
  return db;
}

