const saltRounds = 10;

const axios = require('axios');
const user = require("../../modals/user.modal");
const userMenu = require("../../modals/userMenu.modal");
// const userServices = require("../../modals/userServices.modal");
exports.getAllUsers = async (req, res, next) => {

    try {

        const Task = await userMenu.find({ perentMenu: req.params.id });

        res.send(Task);
    } catch (err) {
        throw new Error(err);
    }
}


exports.sendMessage = async (req, res, next) => {
    var menuData = [];
    var newMsg1 = req.body.message;
    var newMsg;


    const str2 = newMsg1.charAt(0).toUpperCase() + newMsg1.slice(1);

    newMsg = str2;

    var data = {

        "api_key": "2dv2PJ4X196rOeHM7sWN2CKFf3uy1I",
        "sender": 919354869926,
        "number": req.body.number,
        "message": newMsg
    }
    var url;
    var obj;


    const Task1 = await userMenu.find({ perentMenu: data.message })
  
if((Task1.length === 0)){
 
    const userData = await userMenu.find({ menuTitle: Task1.perentMenu })
  
    if((data.message != "Hi") && (userData.length === 0)){
        obj = {
            "api_key": "2dv2PJ4X196rOeHM7sWN2CKFf3uy1I",
            "sender": data.sender,
            "number": data.number,

            "message": "Wellcome to " + data.message
        }
        url = "https://watzapi.in/send-message"; 
        
    }else{
       
            var obj2;
            var obj3;
            const Task = await userMenu.find({ perentMenu: "Menu" });

            Task.forEach((item, index) => {
                let d = index + 1;
                const dynamicKey = "list" + d
                const myObj = {};

                myObj[dynamicKey] = item.menuTitle;
                menuData.push(myObj);
                obj2 = menuData;
            });
            obj2.forEach((item, index) => {

                obj3 = { ...obj3, ...item };
            })
            obj1 = {
                "api_key": "2dv2PJ4X196rOeHM7sWN2CKFf3uy1I",
                "sender": data.sender,
                "number": data.number,
                "footer": "You are in main menu",
                "message": "Please Select the options ",
                "name": "Menu",
                "title": "Account creation",

            }

            obj = { ...obj3, ...obj1 };

            url = "https://watzapi.in/send-list"
        }
}
else{
    var obj2;
    var obj3;
    const Task = await userMenu.find({ perentMenu: data.message });

    Task.forEach((item, index) => {
        let d = index + 1;
        const dynamicKey = "list" + d
        const myObj = {};

        myObj[dynamicKey] = item.menuTitle;
        menuData.push(myObj);
        obj2 = menuData;
    });
    obj2.forEach((item, index) => {

        obj3 = { ...obj3, ...item };
    })
    obj1 = {
        "api_key": "2dv2PJ4X196rOeHM7sWN2CKFf3uy1I",
        "sender": data.sender,
        "number": data.number,
        "footer": "You are in "+ data.message,
        "message": "Please Select the options ",
        "name": data.message + " Menu",
        //"title": "Support",
        "title": data.message,

    }

    obj = { ...obj3, ...obj1 };

    url = "https://watzapi.in/send-list"
}
axios.post(url, obj)
.then(response => {
    res.json({
        status: true,
        message: "Message deliver successfully"
    });
})
.catch(error => {
    res.json(error)
});
}