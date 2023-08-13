const express=require("express");
const registerController=require("../Controllers/registerController");
const loginController=require("../Controllers/loginController");
const {getProducts,getSingleProduct}=require("../Controllers/userControllers/product");
const {placeOrder,getOrders,cancelOrder}=require("../Controllers/userControllers/order");
const Auth=require("../Middlewares/Auth");
const router=express.Router();




//User Register
router.post("/register",registerController);

//User Login
router.post("/login",loginController);


//Get all Products
router.get("/products",getProducts);

//Get a Single Product
router.get("/products/:id",getSingleProduct);

//Making an Order
router.post("/order",Auth,placeOrder);

//Get all User's orders
router.get("/orders",Auth,getOrders);

//Cancell User's Order
router.post("/orders/:id",Auth,cancelOrder)

module.exports=router;