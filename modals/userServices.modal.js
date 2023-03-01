const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");
const userservices = new mongoose.Schema({
  
    servicesName:{
        type: String,
        require:true,
    },
    servics:{
        type: [],
        require:true,
    },
   
},
{ collection: 'userservices' })

userservices.plugin(timestamp, {
    createdAt: "created_at",
    updatedAt: "updated_at"
});

module.exports = mongoose.model("userservices",userservices);
