const config = require('config.json');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
 const db = require('_helpers/db');
const User = db.User;
//const User = db.User;

const user = require('../modals/userMenu.modal');

module.exports = {
   
    getById,
  
};



async function getById(id) {
    
    return await User.findById(id);
    
}