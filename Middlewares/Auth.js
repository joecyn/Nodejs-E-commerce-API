//This function verifies the token
const jwt=require("jsonwebtoken")
const isAuthenticated= (req,res,next)=>{
    try{
    const token=req.cookies.jwt
       
        if(token){
            
            jwt.verify(token,process.env.JWT_SECRET,async(err,user)=>{
                if(err){
                    res.status(400).json("Unauthorised")
                }
                else{
                    
                    req.user=user
                    
                    next(); 
                }
            })
        }
        else{
            
            
          
           res.status(400).json("Unauthorised")
            
        }

    }
    catch(err){
        console.log(err)
    }
}
module.exports=isAuthenticated;