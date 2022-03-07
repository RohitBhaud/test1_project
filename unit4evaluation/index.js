const express = require("express");

const app = express()

const books =(req ,res ,next)=>{
    console.log("Fetching all books");
    next()
}
app.get("/books",books ,(req,res)=>{
    return res.send("books")
})

const PORT = 3333;
app.listen(PORT , ()=>{console.log(running)})