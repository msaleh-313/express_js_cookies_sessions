var express = require('express');
var router = express.Router();


//***************************************************************** */
            //1-->db creation
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/firstNoSQLDb");
              //2-->schema creation
const userschema=mongoose.Schema({
  username:String,
  name:String,
  age:Number
})
              //3-->model creation  
module.exports=mongoose.model("user",userschema)
              //4-->ab isko index.js may require karloo
//***************************************************************** */
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

