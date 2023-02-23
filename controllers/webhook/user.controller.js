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
            "sender": data1.sender,
            "number":data1.number,
            "message": "Wellcome to CRM. press 2 for our services",
           
                                                    
        }
    }else if(data1.message=='2'){
        data1={
            "api_key": "2dv2PJ4X196rOeHM7sWN2CKFf3uy1I",
            "sender": data1.sender,
            "number":data1.number,
            "footer": "ok",
            "message": "Please Select the options ",
            "name": "Menu",
             "title":"Account creation",
             "list1":"option1",
             "list2":"option2",
             "list3":"option3",
             "list4":"option4"
                                                    
        }
        
    
    }else if(data1.message=='3'){
        data1={
            "api_key": "2dv2PJ4X196rOeHM7sWN2CKFf3uy1I",
            "sender": data1.sender,
            "number":data1.number,
            "footer": "ok",
            "message": "Please Select the options ",
            "name": "Sub Menu",
             "title":"Sub Menu",
         
             "list1":"option A",
             "list2":"option B",
             "list3":"option C"
                                                    
        }
    }
    else{
        data1={
            "api_key": "2dv2PJ4X196rOeHM7sWN2CKFf3uy1I",
            "sender": data1.sender,
            "number":data1.number,
            "message": "Contact to our support team",
           
                                                    
        }
    }
     return data1
   

}
