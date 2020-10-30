const express = require("express")
const path = require("path")
const app = express();
const hbs=require("hbs")
const partialPath=path.join(__dirname,"/views/partials")
app.use(express.static(path.join(__dirname,'/public')))
hbs.registerPartials(partialPath)
app.set('views',path.join(__dirname,"views"))

app.set("view engine","hbs")
app.get("/",(req,res)=>{
    res.render("header")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/services",(req,res)=>{
    res.render("services")
})
app.get("/contact",(req,res)=>{
    res.render("contact")
})
app.get("/join",(req,res)=>{
    res.render("join")
})
app.get("/subscribe",(req,res)=>{
    res.render("subscribe")
})
app.get("*",(req,res)=>{
    res.render("error")
})
app.listen(3000, () => {
    console.log("server listening on port 3000")
})
