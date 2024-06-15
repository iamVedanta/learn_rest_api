const express = require('express');
const router = express.Router();

const { getAllProducts, getProductsTesting } = require('../controllers/products');

router.route('/').get(getAllProducts);

router.route('/testing').get(getProductsTesting);


//router.route('/testing').get(getAllProducts);
// if someone visits localhost:5000/testing, then getAllProducts function 
//will be called
module.exports = router;