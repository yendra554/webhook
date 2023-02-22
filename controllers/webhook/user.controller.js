

const saltRounds = 10;

const axios = require('axios'); 


exports.sendMessage = async (req, res, next) => {
const data={
    
        "api_key": "2dv2PJ4X196rOeHM7sWN2CKFf3uy1I",
        "sender": 919354869926,
        "number": req.body.from,
        "message": req.body.message,
      
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
        data1.message="1"
    }else if(data1.message=='2'){
        data1={
            "api_key": "2dv2PJ4X196rOeHM7sWN2CKFf3uy1I",
            "sender": 919354869926,
            "number": 917428322239,
            
            "footer": "ok",
            "message": "Please Select the options",
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
