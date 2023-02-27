const mongoose = require("mongoose")

const dotenv = require('dotenv');



mongoose.connect(
    
        process.env.DB_URL,
        {useNewUrlParser:true,useUnifiedTopology: true},
        err =>{
            if(err){
                throw err.message;
            }
            else{
                console.log("databse connection successfully !", process.env.DB_URL);
            }
        }
    )

    module.exports = mongoose;