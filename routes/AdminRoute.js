const express=require("express");
const loginController=require("../Controllers/loginController");
const registerController=require("../Controllers/registerController");
const {newProduct}=require("../Controllers/adminControllers/product");
const Auth=require("../Middlewares/Auth");
const isAdmin=require("../Middlewares/isAdmin");
const router=express.Router();


//Login
router.post("/login",loginController);

//Register
router.post("/register",registerController);

//Create Product

router.post("/product",Auth,isAdmin,newProduct);



module.exports =router;