const Products=require("../../Models/Product");

const getProducts=async(req,res)=>{
    try {
        const products=await Products.find({});
        products.length > 0 ? res.send(products) : res.send("There are no Products available");
        
    } catch (error) {
        res.send(error);
        
    }
   
}
const getSingleProduct=async(req,res)=>{
    try {
        const id=req.params.id;
        const product=await Products.findById({_id:id});
        product ? res.send(product) : res.send("Product not found");
        
    } catch (error) {
        res.send(error);
        
    }
}
module.exports={getProducts,getSingleProduct}