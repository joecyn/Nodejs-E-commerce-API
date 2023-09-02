const Products=require("../../Models/Product");


const newProduct=async(req,res)=>{
    try {
        const product=await Products.create(req.body);
        res.send(product)
          
    } catch (error) {
        res.send(error)
        
    }

}

module.exports={newProduct}
