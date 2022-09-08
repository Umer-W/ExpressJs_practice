const express = require('express')
const app = express()
const path=require("path")
const hbs=require('hbs')

const staticPath=path.join(__dirname,"../public")
const templatePath=path.join(__dirname,"../template/views")
const partialsPath=path.join(__dirname,"../template/partials")
// app.use(express.static(staticPath))

app.set('view engine','hbs'); 
app.set("views",templatePath)
hbs.registerPartials(partialsPath)
app.get("",(req,res)=>{
    res.render("index",{accountName:"Muhammad_Umer"});
})
app.get("/services",(req,res)=>{
    res.render("services",{accountName:"Muhammad_Umer"});
})
app.get("/contact",(req,res)=>{
    res.render("contact",{accountName:"Muhammad_Umer"});
})


app.get("/", (req,res)=>{
    res.send("Assalam o Alaikum Pakistan from home")
})
app.get("/about", (req,res)=>{
    app.use(express.static(newPath))

})

app.get("/contact", (req,res)=>{
    res.send("Assalam o Alaikum Pakistan from contact")
})
app.get("/services", (req,res)=>{
    res.send("Assalam o Alaikum Pakistan from services")
})
app.get("*", (req,res)=>{
    
    res.send("<h1>404 Error, Page does not Exist.</h1>")
})
app.listen(7999,()=>{
    console.log("han g bai apka apna server run ho gia ha ")
})