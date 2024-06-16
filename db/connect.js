const mongoose = require('mongoose');

uri = "mongodb+srv://callvedanta:mdYsu3XS3U4J55hq@learnapi.4fs1czs.mongodb.net/?retryWrites=true&w=majority&appName=learnapi"

const connectDB = async() => {
    console.log("Connecting to Database");
    return mongoose.connect(uri);
    // return mongoose.connect(uri,{
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //     useCreateIndex: true,
    //     useFindAndModify: false
    // });

};

module.exports = connectDB;