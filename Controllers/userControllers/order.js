const Orders=require("../../Models/order");
const Products=require("../../Models/Product");
const Users=require("../../Models/user");

//Placing Order
const placeOrder=async(req,res)=>{
    try {
        const userID=req.user.id;
        let Total=0;
        let prod_price=0;
        req.body.forEach(body => {
            prod_price=body.quantity * body.price
            Total+=prod_price;
            
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

//Get All Orders

const getOrders=async(req,res)=>{
    try {
        const user_id=req.user.id;
        const orders= await Orders.find({user_Id:user_id});
        orders.length > 0 ? res.send(orders) : res.send("No orders available")
        
        
        
        
    } catch (error) {
        res.send(error);
        
    }
}

//Cancel order

module.exports={placeOrder,getOrders}

