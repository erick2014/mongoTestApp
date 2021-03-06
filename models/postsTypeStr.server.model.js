'use strict'
//create a schema
var  mongoose=require("mongoose");
//get the schema object
var Schema=mongoose.Schema;

//Create a new instance of schema
var PostTypeStr=new Schema({
  title:{
    type:String,
    default:""
  },
  description:{
    type:String,
    default:""
  },
  author:{
    //define this field as dbref using the user model
    type:String,
    ref:'Author',
    required:true
  }

})

//define a post schema
mongoose.model('PostTypeStr',PostTypeStr);