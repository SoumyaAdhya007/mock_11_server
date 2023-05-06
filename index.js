const express= require("express");
const cors= require("cors")
require("dotenv").config();
const {connection}= require("./Config/db")
const {APIRouter}=require("./Router/api.router")
const app=express();
app.use(cors())
app.use(express.json());
app.use("/api",APIRouter)
app.get("/",(req,res)=>{
    res.send("Home")
})
app.listen(process.env.port, async()=>{
    try {
        await connection ;
        console.log("connected to db")
        console.log(`server is running on ${process.env.port}`)
    } catch (error) {
        console.log(error)
    }
})