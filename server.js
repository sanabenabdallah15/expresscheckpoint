const express=require("express")
const datee = require("./midelwear/datee")
const app=express()
const dateee=require('./midelwear/datee')
const port =5000
app.use(dateee)
app.use(express.static(__dirname+"/Public"))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/Public/home.html")
}
)
app.get('/service',(req,res)=>{
    res.sendFile(__dirname+"/Public/service.html")
}
)
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+"/Public/contact.html")
}
)

app.listen(port,(err)=>{
    (err)?console.log(err):console.log("server is running on port  ",port)
})