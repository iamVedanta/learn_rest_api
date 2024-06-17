const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new mongoose.Schema({
    name: { type: String, required: [true,"price must be provided"]},
    price: {
         type: Number, 
        required: true
     },
    feature: {
        type: Boolean,
        default:true
    },
    rating: {
        type: Number, 
        default: 4.9},
    createdAt: {
        type: Date,
        default: Date.now
    },
    company: {
        type: String,
        enum: {
            values: ["apple","samsung","dell","mi","google","microsoft"],
            message: '{VALUE} is not supported'
        },
    },
});

//write the data in singular form (here product) and it will automatically convert it into plural form (products)
module.exports = mongoose.model('Product', productSchema);