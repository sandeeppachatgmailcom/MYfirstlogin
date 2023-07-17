const express = require("express");
const session = require("express-session");
var router = express.Router();



const authenticateUser = (req, res, next) => {
    if (req.session.user === "sandeep") {
        console.log('middleware loaded')
      next();
    } else {
      res.redirect('/login');
    }
  };
const credential = {
    name:"sandeep",
    Password:"12345"
};
//log-in 


router.post('/login',(req,res)=>{
    console.log(req.body);
    if(req.body.userName ==credential.name && req.body.password ==credential.Password){
        req.session.user=req.body.userName;
        res.cookie(req.body.userName);
        console.log(req.session.user);
        res.redirect('/router/dashboard');
        res.end('Logged in Succesfull');
    }
    else{
        res.render('base',{Message:'Invalid details'})
    }
})

//routing to dashboard
router.get('/dashboard',authenticateUser,(req,res)=>{
    if(req.session.user==="sandeep"){
    console.log(req.session.user)
    res.render('Dashboard')}
    else {
        res.end('Session time out. please try again')
    }
})
router.get('/logout',(req,res)=>{
    res.clearCookie(req.body.userName);
    req.session.destroy ((err=>{
     if(err){
        console.log('error');
        res.send('error');
        }
    else{
        res.render('base',{Message:'Loggedout Successfully'})
    }    
    }
     
    ))})
    
router.get('/contact',(req,res)=>{
        res.render('contact',{Message:''})
    
    })
module.exports = router;