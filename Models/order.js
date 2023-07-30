const mongoose=require("mongoose");

const orderSchema=new mongoose.Schema({
    product:[{
        title:{
        type:String,
        required:true

        },
        quantity:{
            type:Number,
            required:true
        },
        price:{
            type:Number,
            required:true

        }
    }],
   
    user_Id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    Total_Cost:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        default:"Pending"
    }
})
const Order= mongoose.model("Order",orderSchema);
module.exports=Order