const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("hi I am live");
})

const PORT = process.env.PORT || 5000;
//this will select the available port while hosting 

const start = async() => {
    try{
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