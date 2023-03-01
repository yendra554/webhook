const config = require('config.json');
const mongoose = require('mongoose');
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect(process.env.MONGODB_URI || config.connectionString, connectionOptions,()=>{
    console.log('Database Connected Successfully');
    
});
mongoose.Promise = global.Promise;

module.exports = {
        User: require('../models/user'),
        SubUser:require('../models/subuser')
};