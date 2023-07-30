const express=require("express");
const registerController=require("../Controllers/registerController");
const loginController=require("../Controllers/loginController");
const {getProducts,getSingleProduct}=require("../Controllers/userControllers/product");
const {placeOrder,getOrders}=require("../Controllers/userControllers/order");
const Auth=require("../Middlewares/Auth");
const router=express.Router();


//Get all Products
router.get("/products",getProducts);

//Get a Single Product
router.get("/products/:id",getSingleProduct);

//User Register
router.post("/register",registerController);

//User Login
router.post("/login",loginController);

//Making an Order
router.post("/order",Auth,placeOrder);

//Get all orders
router.get("/orders",Auth,getOrders);

module.exports=router;