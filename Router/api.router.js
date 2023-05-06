const express=require("express");
const {PostModel}=require("../Model/post.model")
require("dotenv").config();
const APIRouter=express.Router();
APIRouter.post("/post",async(req,res)=>{
const {Author_Name,Notice_Title,Notice_Description}=req.body;
    try {
        if(!Author_Name||!Notice_Title||!Notice_Description){
          return  res.status(400).send({msg:"Please provied all details"})
        }
        const newPost= new PostModel({
            Author_Name,
            Notice_Title,
            Notice_Description,
            Date:new Date()
        })
        await newPost.save()
        res.status(201).send({msg:"Posted"})
    } catch (error) {
        res.status(404).send(error)
    }
})

APIRouter.get("/view", async(req,res)=>{
    try {
        const viewPosts= await PostModel.find();
        res.status(200).send(viewPosts)
    } catch (error) {
        res.status(404).send({msg:error})
    }
})
APIRouter.patch("/post/:id", async(req,res)=>{
    const id=req.params.id;
    const payload=req.body;
    try {
        await PostModel.findByIdAndUpdate({_id:id},payload)
        res.status(201).send({msg:"Post Updated"})
    } catch (error) {
        res.status(404).send({msg:error})
        
    }
})
APIRouter.delete("/post/:id", async(req,res)=>{
    const id=req.params.id;
    try {
        await PostModel.findByIdAndRemove({_id:id})
        res.status(202).send({msg:"Post Deleted"})
    } catch (error) {
        res.status(404).send({msg:error})
        
    }
})

module.exports={
    APIRouter
}