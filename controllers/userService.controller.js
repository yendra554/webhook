
const axios = require('axios'); 

const userMenu = require("../modals/userMenu.modal");
const userServices = require("../modals/userServices.modal");
const express = require("express");
const router = express.Router();

exports.getMenu = async (req, res, next) => {
   

    try {
    
       const Task = await userMenu.find();
     
        res.send(Task);
    } catch (err) {
        throw new Error(err);
    }
}


exports.createMenu = async (req, res) => {
   
    try {
        const userMenus = await new userMenu(req.body);
       

        const finduser =await userMenu.find({menuTitle:req.body.menuTitle});
      
    if ((finduser.length !=0)) {

        return res.status(500).json({
            status: false,
            message: "services exists please use other services !"
        })

    }else{
        const newuser = await userMenus.save();
     
        if(newuser._id){
            res.json({
                status: true,
                message: "Services create  Successfully !"
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

exports.addService = async (req, res) => {
   
    try {
        const userServicess = await new userServices(req.body);
       

        const finduser =await userServices.find({servicesName:req.body.servicesName});
      
    if ((finduser.length !=0)) {

        return res.status(500).json({
            status: false,
            message: "services exists please use other services !"
        })

    }else{
        const newuser = await userServicess.save();
     
        if(newuser._id){
            res.json({
                status: true,
                message: "Services create  Successfully !"
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
exports.deleteMenu = async(req, res) => {


    userMenu.find({ menuTitle:req.params.id}, function (err, data) {
        if (err) {
            res.status(400).json({
                errror: err
            });
        } else {
            userMenu.deleteMany({
                menuTitle:req.params.id
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

exports.getServices = async (req, res, next) => {
   
    try {
    
       const Task = await userServices.find();
     
        res.send(Task);
    } catch (err) {
        throw new Error(err);
    }
}
exports.deleteServices = async(req, res) => {


userServices.find({ servicesName:req.params.id}, function (err, data) {
        if (err) {
          callback(err);
        } else {
            userServices.deleteMany({
                servicesName:req.params.id
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

exports.getServicesByMenu = async(req, res) => {


 userServices.find({ servicesName:req.params.id}, function (err, data) {
                if (err) {
               
                  res.status(400).json({
                    error: err
                });

                } else {
                    res.status(200).json({
                        data: data
                    });
                }
              });
            }