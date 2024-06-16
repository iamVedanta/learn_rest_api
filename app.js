const express = require('express');
const app = express();
const connectDB = require('./db/connect');




const PORT = process.env.PORT || 5000;
//this will select the available port while hosting 
const products_routes = require("./routes/products");



app.get("/",(req,res)=>{
    res.send("hi I am live");
})

//middleware or to set router
app.use("/api/products", products_routes)


const start = async() => {
    try{
        await connectDB();  //connection to database
        app.listen(PORT, ()=>{
            console.log(`${PORT} Yes I am connected`);
            console.log("server is running on port 3000");
        })
    }
    catch(err){
        console.log(err);
    }

}

start();