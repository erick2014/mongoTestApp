'use strict'
//create a schema
var mongoose=require("mongoose");
//get the schema object
var Schema=mongoose.Schema;

//Create a new instance of schema
var Author=new Schema({
  name:{
    type:String,
    default:""
  }
})

//define a post schema
mongoose.model('Author',Author);