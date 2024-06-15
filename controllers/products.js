const getAllProducts = async(req,res)=>{
    res.status(200).json({msg:"I am get all products"});
};

const getProductsTesting = async(req,res)=>{
    res.status(200).json({msg:"I am get all products testing"});
};

module.exports = {getAllProducts,getProductsTesting}