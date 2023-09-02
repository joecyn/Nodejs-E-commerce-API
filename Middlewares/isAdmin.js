const Users=require("../Models/user");
const isAdmin=async(req,res,next)=>{
    try {
        const user_id=req.user.id;
        const user=await Users.findById({_id:user_id});
        if(user.isAdmin){
            next();
        }
        else{
            res.send("Unauthorized")
        }
        
        
    } catch (error) {
        res.send(error)
        
    }

}

module.exports=isAdmin;