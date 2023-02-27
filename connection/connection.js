const mongoose = require("mongoose")
import { env } from 'process';
require('dotenv').config({ path: '.env' });
mongoose.connect(
    
        // process.env.DB_URL,
        "mongodb+srv://watzapi:5bntxCLa7nxnwveI@cluster0.qgabhb9.mongodb.net/webChetData1?retryWrites=true&w=majority",
        {useNewUrlParser:true,useUnifiedTopology: true},
        err =>{
            if(err){
                throw err.message;
            }
            else{
                console.log("databse connection successfully !");
            }
        }
    )

    module.exports = mongoose;