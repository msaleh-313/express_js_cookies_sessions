var express = require('express');
var router = express.Router();
const userModel = require("./users"); 


//*******************************SESSION SCENE ON HAY*****************************/
router.get('/',function (req,res) {
  // res.send("hello")
  req.session.koibhinaam="allowed";
  res.render("index");
})

router.get("/checkSession",function(req,res){

  console.log(req.session);    //ek daffa kisi b route may session save kar idya to kahin b access ho skta hay

  if(req.session.koibhinaam==="allowed"){
    res.send("Hello welcome")
  }
  else{
    res.send("Chutti kar");
  }
})

router.get("/khatamKaroSession",function(req,res){
  
  req.session.destroy(function(err){
    console.log(err);
    res.send("session muk gya j")
  })
})

//*******************************SESSION SCENE Khatan HAY*****************************/





//*******************************Cookies Scene on hay*****************************/

router.get("/setkarocookie",function(req,res){
  res.cookie("age",20);
  res.send("cookie set kar di hay");
})

//    Ab read kese karen gay cookie ***********************//

router.get("/readkarocookie",function(req,res){
  console.log(req.cookies.age);
  res.send("check karo cookie kesi hay");
})

//    Ab delelte kese karen gay cookie ***********************//

router.get("/deletekarocookie",function(req,res){
  res.clearCookie("age");
  res.send("Uraa di hay cookie age wali")

})


router.get('/create', async function (req, res) {
    const createdUser = await userModel.create({
      username: "Saleh",
      age: 25,
      name: "Saleh"
    });
    res.send(createdUser);  
});

router.get('/allUsers',async function(req,res){
  // users=await userModel.find()
  const users=await userModel.findOne({username:"Saleha"})
  res.send(users)
})

module.exports = router;
