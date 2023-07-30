const express=require("express");
const mongoose=require("mongoose");
const Admin=require("./routes/AdminRoutes");
const User=require("./routes/UserRoutes");
const PORT =5000;
const app=express();


app.use("/api/admin",Admin);
app.use("/api/user",User);

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}...`);
})