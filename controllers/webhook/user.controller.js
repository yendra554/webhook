

const saltRounds = 10;

const axios = require('axios'); 


exports.sendMessage = async (req, res, next) => {
    console.log("dfdgfhfhgwetertreter", req)
   axios.post('https://watzapi.in/send-message',req)
  .then(response => {
    res.json({
                        status: true,
                        message: "Signup Successfully !"
                    });
  })
  .catch(error => {
    res.json({
        status: false,
        message: error
    });
  });
}

// exports.signup = async (req, res) => {
   
//     try {
        
//         const users = await new user(req.body);
   
//         const finduser = await user.find({ email: req.body.email });
    
//         if (finduser.length >= 1) {

//             return res.status(500).json({
//                 status: false,
//                 message: "email already exists please use other email address !"
//             })

//         }

//         const pass = await bcrypt.hash(req.body.password, saltRounds);

//         users.password = pass;

//         const newuser = await users.save();
//         if(newuser._id){
//             res.json({
//                 status: true,
//                 message: "Signup Successfully !"
//             });
//         }else{
//             res.status(400).json({
//                 message: "All fields are required !"
//             });
//         }

//     } catch (error) {
//         res.status(400).json({
//             message: "Something went wrong."
//         });
//     }


// }

// exports.login = (req, res) => {

//     user.findOne({ email: req.body.email })
//         .then(users => {
//             if (!users.email) {
//                 return res.status(404).json({
//                     message: "email address doesn't exist"
//                 })
//             }

//             let userData = users

//             bcrypt.compare(req.body.password, users.password, (err, result) => {

//                 if (!result) {
//                     return res.status(500).json({
//                         message: "unAthorized User",
//                         result
//                     })
//                 }

//                 if (result) {

//                     const token = jwt.sign({ userData }, 'secret', { expiresIn: "7d" });

//                     return res.status(200).json({
//                         status: true,
//                         message: "Authentication Successful",
//                         token: token,
//                         userData
//                     })
//                 }

//             });

//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({
//                 error: err
//             });
//         });

// }