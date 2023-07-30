const User=require("../Models/user");
const bcrypt=require("bcrypt");
const jwt = require("jsonwebtoken")

const loginController=async(req,res)=>{
    //creating JWT token
    const maxAge=3*26*60*60;
    
    const createToken=(id)=>{
       return jwt.sign({id},process.env.JWT_SECRET /*secret='mtujaba'*/ ,{
           expiresIn:maxAge
       });
       
    }
    try{
    const{email,password}=req.body;
    if(!email || !password){
        const Message="All fields are required!"
        
        res.status(400).json({Message})
    } 
    
    else{
        const findUser= await User.findOne({email:email})
    if(!findUser) {
        const Message="User does not Exist please Register"
        res.status(400).json({Message})
    } 
    
    // console.log(password)
    const match= await bcrypt.compare(password,findUser.password)

    if(!match) {
        const Message ="Invalid password or User name"
       res.status(400).json({Message})
    }
    else{
        
        const token=createToken(findUser._id);
        const {name,email,_id}=findUser
        res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000});
        res.status(200).json({name,email,_id})
      
    }
    
    }
    
    }
    catch(err){
        console.log(err)
    }
    

}
module.exports=loginController;