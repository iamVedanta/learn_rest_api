const Product = require("../models/product");

const getAllProducts = async(req,res)=>{

    const myData = await Product.find({});//getting all the data from the database
    console.log(res);
    console.log(myData);
    res.status(200).json(myData);
};

const getProductsTesting = async(req,res)=>{
    const myData = await Product.find({});
    res.status(200).json(myData);
};

module.exports = {getAllProducts,getProductsTesting}