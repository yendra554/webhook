const saltRounds = 10;

const axios = require('axios');


exports.sendMessage = async (req, res, next) => {

    var data = {

        "api_key": "2dv2PJ4X196rOeHM7sWN2CKFf3uy1I",
        "sender": 919354869926,
        "number": req.body.number,
        "message": req.body.message,
        //  "message": 2,

    }
    const obj = getDataObject(data)
    const url = getURL(data)

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


function getURL(data1) {

    if (data1.message == 'hi') {
        url = "https://watzapi.in/send-message"
    } else if (data1.message == '2') {
        url = " https://watzapi.in/send-list"

    }else if (data1.message == 'option1') {
        url = " https://watzapi.in/send-list"

    }
    else {
        url = "https://watzapi.in/send-message"
    }
    return url

}

function getDataObject(data1) {


    if (data1.message == 'hi') {
        data1 = {
            "api_key": "2dv2PJ4X196rOeHM7sWN2CKFf3uy1I",
            "sender": data1.sender,
            "number": data1.number,
            "message": "Welcome to our Web Chat CRM.\nPlease type 2 for the Main Menu.",


        }
    } else if (data1.message == '2') {
        data1={
            "api_key": "2dv2PJ4X196rOeHM7sWN2CKFf3uy1I",
            "sender": data1.sender,
            "number":data1.number,
            "footer": "You are in main menu",
            "message": "Please Select the options ",
            "name": "Menu",
             "title":"Account creation",
             "list1":"option1",
             "list2":"option2",
             "list3":"option3",
             "list4":"option4"
                                                    
        }

    }
    else if (data1.message == 'option1') {
    data1={
        "api_key": "2dv2PJ4X196rOeHM7sWN2CKFf3uy1I",
        "sender": data1.sender,
        "number":data1.number,
        "footer": "You are in sub menu",
        "message": "Please Select the options ",
        "name": " Sub Menu",
         "title":"Sub Menu",
         "list1":"optionA",
         "list2":"optionB",
         "list3":"optionC",
         "list4":"optionD"
                                                
    }
  }
  else{
    data1 = {
        "api_key": "2dv2PJ4X196rOeHM7sWN2CKFf3uy1I",
        "sender": data1.sender,
        "number": data1.number,
        "message": "Please contact our support team.",


    }
  }
    return data1


}
