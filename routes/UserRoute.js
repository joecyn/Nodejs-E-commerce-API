const express=require("express");
const Users=require("../Models/user");
const Products=require("../Models/Product");
const Orders=require("../Models/order");
const router=express.Router();


//Get all Products
router.get("/products",async(req,res)=>{
    try {
        const products=await Products.find({});
        products.length > 0 ? res.send(products) : res.send("There are no Products available");
        
    } catch (error) {
        res.send(error);
        
    }
   
});

//Get a Single Product
router.get("/products/:id",async(req,res)=>{
    try {
        const id=req.params.id;
        const product=await Products.findById({_id:id});
        product ? res.send(product) : res.send("Product not found");
        
    } catch (error) {
        res.send(error);
        
    }
});

//


module.exports =router;