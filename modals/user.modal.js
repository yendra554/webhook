const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");
const userSchema = new mongoose.Schema({
  
    mobileNo:{
        type: String,
        require:true,
    },
    userStatus:{
        type: String,
        require:true,
    },
   
},
{ collection: 'users' })

userSchema.plugin(timestamp, {
    createdAt: "created_at",
    updatedAt: "updated_at"
});

module.exports = mongoose.model("users",userSchema);
