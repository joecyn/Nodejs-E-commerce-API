const mongoose=require("mongoose");

const orderSchema=new mongoose.Schema({
    product_Id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    prod_quantity:{
        type:Number,
        required:true

    },
    prod_total_price:{
        type:Number,
        required:true
    },
    user_Id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    status:{
        type:String,
        default:"Pending"
    }
})
const Order= mongoose.model("Order",orderSchema);
module.exports=Order