const Orders=require("../../Models/order");
const Products=require("../../Models/Product");
const Users=require("../../Models/user");

//Placing Order
const placeOrder=async(req,res)=>{
    try {
        const userID=req.user.id;
        let Total=0;
        let prod_total=0;
        req.body.forEach(body => {
            prod_total=body.quantity * body.price
            Total+=prod_total;
            
        });
        const order=await Orders.create({
            product:req.body,
            Total_Cost:Total,
            user_Id:userID
        });
        res.send(order);
        
        

        
    } catch (error) {
        res.send(error);
        
    }
      

}

//Get All User's  Orders

const getOrders=async(req,res)=>{
    try {
        const user_id=req.user.id;
        const orders= await Orders.find({user_Id:user_id});
        orders.length > 0 ? res.send(orders) : res.send("No orders available")  
    } catch (error) {
        res.send(error);
        
    }
}

//Cancel  an Order
const cancelOrder=async(req,res)=>{

    try {
        const user_id=req.user.id;
        const order_id=req.params.id;
        const order=await Orders.find({_id:order_id});
        if(order){
            if(JSON.stringify(order[0].user_Id)===JSON.stringify(user_id)){
                    order[0].status="Cancelled";
                    order[0].save();
                    res.send(order);
            }
            else{
                
                 
                 res.send("Not Authorized");
            }
        }
        else{
            res.send("Not Authorized");
        }

        
    } catch (error) {
        res.send(error);
        
    }
}

module.exports={placeOrder,getOrders,cancelOrder};

