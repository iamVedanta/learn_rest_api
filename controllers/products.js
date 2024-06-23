const Product = require("../models/product");

const getAllProducts = async(req,res)=>{

    const myData = await Product.find(req.query);//getting all the data from the database
    //
    // console.log(res);
    // console.log(myData);
    console.log(req.query);
    res.status(200).json(myData);
};

const getProductsTesting = async(req,res)=>{
    const myData = await Product.find({});
    res.status(200).json(myData);
};

module.exports = {getAllProducts,getProductsTesting}