'use strict'
//include the mongoose mdule
var mongoose=require("mongoose");
//include the post's model
var PostsTypeObj=mongoose.model('PostTypeObj');
var PostsTypeStr=mongoose.model('PostTypeStr');
var Author=mongoose.model('Author');

var createAuthor=function(cb){
  var author=new Author({"name":"author 1"});
  author.save(function( err,data ){
    if(err){
      cb(false);
    }else{
      cb(data);
    }
  })
}

exports.genTestData=function(req,res,next){
  var doc={};
  var postsTypeObj;
  var postsTypeStr;
  var authorId;

  //try to create the author, then generate random data
  createAuthor(function(author){
    if(author){
      //set the author reference
      //doc.author=author;
      authorId=String(author._id);

      //generate random data
      for(var i=1;i<=10000;i++){
        doc.description="desc_"+i;
        doc.title="title_"+i;

        //get an instance of PostsTypeObj model
        postsTypeObj=new PostsTypeObj({
          "title":"title_"+i,
          "description":"desc_"+i,
          "author":author
        })
        //get an instance of PostsTypeStr model
        postsTypeStr=new PostsTypeStr({
          "title":"title_"+i,
          "description":"desc_"+i,
          "author":authorId
        })

        //save the post with an ObjectId reference
        postsTypeObj.save(function( err,data ){
          if(err){
            res.send("was an error populating the db");
            return false;
          }
        })

        //save the post with a string reference
        postsTypeStr.save(function( err,data ){
          if(err){
            res.send("was an error populating the db");
            return false;
          }
        })
      }
      res.send("done!");
    }
    else{
      res.send("Create an author before generate data!");
    }

  })
}

exports.listPostStr=function(req,res,next){
   PostsTypeStr
    .find({})
    .populate("author")
    .exec(function(err,posts){
      res.send(posts);
    })
}

exports.listPostObj=function(req,res,next){
  PostsTypeObj
    .find({})
    .populate("author")
    .exec(function(err,posts){
      res.send(posts);
    })
}
