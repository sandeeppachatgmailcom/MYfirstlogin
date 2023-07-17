const express = require("express");
const app = express();
const ejs = require('ejs');
const port = 3000;
const path = require("path");
const bodyparser = require("body-parser");
const Session = require("express-session"); 
const  {v4:uuidv4}=require("uuid");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
let router = require('./router'); 

app.use((req,res,next)=>{
  res.set('cache-control','no-store,no-cache')
  next();
})

const middleware = (a,d,next)=>{console.log('124');
next(); }
app.use(middleware);

app.use('/static',express.static(path.join(__dirname,'public')));
app.use('/assets',express.static(path.join(__dirname,'public/assets')));
app.use(Session({
  secret:uuidv4(),
  resave:false,
  saveUnintialised:true
}));
app.use('/router',router); 
app.get('/', (req, res) => {
  res.render('base',{title:'login System',Message:''});
});
app.get('/login',(req,res)=>{
  res.render('base',{title:'login System',Message:'--Please login-- '});
})

app.get('/contact',(req,res)=>{
  res.render('contact',{Message:''})

})
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
