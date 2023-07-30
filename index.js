const express=require("express");
const mongoose=require("mongoose");
const AdminRoute=require("./routes/AdminRoute");
const UserRoute=require("./routes/UserRoute");
const PORT =5000;
const app=express();


app.use("/api/admin",AdminRoute);
app.use("/api/user",UserRoute);

mongoose.set('strictQuery', false)
mongoose.connect("mongodb://0.0.0.0:27017/e-commerce")
        .then(()=>{
            console.log("Connected!")
        })
        .catch((err)=>{
            console.log(err)
        })

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}...`);
})