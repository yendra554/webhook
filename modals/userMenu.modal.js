const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");
const userMenu = new mongoose.Schema({
  
    menuTitle:{
        type: String,
        require:true,
    },
    status:{
        type: String,
        require:true,
    },
   
},
{ collection: 'userMenu' })

userMenu.plugin(timestamp, {
    createdAt: "created_at",
    updatedAt: "updated_at"
});

module.exports = mongoose.model("userMenu",userMenu);
