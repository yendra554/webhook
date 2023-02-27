const mongoose = require("mongoose")

require('dotenv').config({ path: '.env' });

require('dotenv').config();

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