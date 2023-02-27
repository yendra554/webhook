
// // var bcrypt = require('bcrypt');
// const saltRounds = 10;
// const jwt = require('jsonwebtoken');
const express = require('express');
const axios = require('axios'); 
// const checkAuth = require("../middileware/authentication");
const router = express.Router();
const user = require("../modals/user.modal");
// const userService = require('../service/user.service');
// router.delete('/:id', _delete);
exports.getAllUsers = async (req, res, next) => {
   
    try {
       const Task = await user.find();
     
        res.send(Task);
    } catch (err) {
        throw new Error(err);
    }
}


exports.signup = async (req, res) => {
   
    try {
        const users = await new user(req.body);
       

        const finduser =await user.find({mobileNo:req.body.mobileNo});
      
    if ((finduser.length !=0)) {

        return res.status(500).json({
            status: false,
            message: "mobileNumber exists please use other email address !"
        })

    }else{
        const newuser = await users.save();
        console.log("newuser",newuser)
        if(newuser._id){
            res.json({
                status: true,
                message: "Signup Successfully !"
            });
        }else{
            res.status(400).json({
                message: "All fields are required !"
            });
        }
    }

    

   
    } catch (error) {
        res.status(400).json({
            message: "Something went wrong."
        });
    }


}
exports.updateUser = async (req, res) => {
   
    try {
        const users = await new user(req.body);
    
        const finduser =await user.find({mobileNo:req.body.mobileNo});
      
    if ((finduser.length !=0)) {

        return res.status(500).json({
            status: false,
            message: "mobileNumber exists please use other email address !"
        })

    }else{
        const newuser = await users.save();
        console.log("newuser",newuser)
        if(newuser._id){
            res.json({
                status: true,
                message: "Signup Successfully !"
            });
        }else{
            res.status(400).json({
                message: "All fields are required !"
            });
        }
    }

    

   
    } catch (error) {
   
        res.status(400).json({
            message: "Something went wrong."
        });
    }


}
exports.login = async(req, res) => {
    
    user.findOne({ mobileNo: req.body.mobileNo })
        .then(users => {
            console.log("users", )
            if (!users.mobileNo) {
                return res.status(404).json({
                    message: "mobileNo doesn't exist"
                })
            }

            let userData = users
         return res.status(200).json({
                        message: "Athorized User",
                        
                    })


            
            // bcrypt.compare(req.body.password, users.password, (err, result) => {
 //         return res.status(500).json({
            //             message: "unAthorized User",
            //             result
            //         })
            //     if (!result) {
            //         return res.status(500).json({
            //             message: "unAthorized User",
            //             result
            //         })
            //     }

            //     if (result) {

            //         const token = jwt.sign({ userData }, 'secret', { expiresIn: "7d" });

            //         return res.status(200).json({
            //             status: true,
            //             message: "Authentication Successful",
            //             token: token,
            //             userData
            //         })
            //     }

            // });

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });

}

exports.deleteUser = async(req, res) => {


user.find({ mobileNo:req.params.id}, function (err, data) {
    if (err) {
      callback(err);
    } else {
        user.deleteMany({
        mobileNo:req.params.id
      }, function (err, r) {
        if (err) {
            res.status(500).json({
                errror: err
            });
        } else {
            res.status(200).json({
                message: "scucess"
            });
        }
      });
    }
  });
}

