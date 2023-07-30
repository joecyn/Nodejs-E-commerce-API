const bcrypt=require("bcrypt")
const Joi =require("joi")
const User=require("../Models/user");
const jwt =require("jsonwebtoken")

const RegisterController=async(req,res)=>{
     //creating JWT token
     const maxAge=3*26*60*60;
     const createToken=(id)=>{
         return jwt.sign({id},process.env.JWT_SECRET,{
            expiresIn:maxAge
         });
     }
    const schema=Joi.object(
        {
            name:Joi.string().min(6).max(50).required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).max(20).required().pattern(new RegExp("^[a-zA-Z0-9@]{3,30}$"))
    
        } 
    )
    const result=schema.validate(req.body)
   // const{name,email,password}=req.body;
    if(result.error)
    {   const Message=result.error.details[0].message
       
        res.status(400).json({Message})
        
    }
    else{
        const findUser= await User.findOne({email:req.body.email})
        const username=await User.findOne({name:req.body.name})
    if(findUser || username){
        const Message="User already Exists. Please Login "
     //return res.json({"Message":"User already exists.Please login"})
     res.status(400).json({Message})
       //res.render("Pages/Register",{Message:Message})
    }
    else{

        try{
            const hashedPassword= await bcrypt.hash(req.body.password,10);
            const newUser= await User.create({name:req.body.name,email:req.body.email,password:hashedPassword})
            //create token
            // const token=createToken({id:newUser._id,name:newUser.name});
            const token=createToken(newUser._id);
            res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000});
            res.status(200).json({newUser})
            //req.flash('message', 'User Created Successfully.Please Login');
            //res.redirect("/user/Login")
        }
        catch(err){
            //console.log(err)
            res.status(400).json("User cannot be registered,Please try again later")
        }
    }
    
        
    }
    
    
}
module.exports=RegisterController