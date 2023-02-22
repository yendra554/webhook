const saltRounds = 10;

const axios = require('axios'); 


exports.sendMessage = async (req, res, next) => {
    
var data={
    
        "api_key": "2dv2PJ4X196rOeHM7sWN2CKFf3uy1I",
        "sender": req.body.sender,
        "number": req.body.number,
         "message": req.body.message,
        //  "message": 2,
      
}
const obj=getDataObject(data)
const url=getURL(data)

   axios.post(url,obj )
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


function getURL(data1){

    if(data1.message=='1'){
        url="https://watzapi.in/send-message"
    }else if(data1.message=='2'){
       url=" https://watzapi.in/send-list"
    
    }
    else{
       url="3"
    }
     return url

}

function getDataObject(data1){


    if(data1.message=='1'){
        data1={
            "api_key": "2dv2PJ4X196rOeHM7sWN2CKFf3uy1I",
            "sender": 919354869926,
            "number":data1.number,
            "message": "Please Select the options",
           
                                                    
        }
    }else if(data1.message=='2'){
        data1={
            "api_key": "2dv2PJ4X196rOeHM7sWN2CKFf3uy1I",
            "sender": 919354869926,
            "number":data1.number,
            "footer": "ok",
            "message": "Please Select the options dsfsdf",
            "name": "Menu",
             "title":"Account creation",
             "list1":"list 1",
             "list2":"option 2",
             "list3":"option 3",
             "list4":"option 4"
                                                    
        }
    
    }
    else{
        data1.message="3"
    }
     return data1
   

}
