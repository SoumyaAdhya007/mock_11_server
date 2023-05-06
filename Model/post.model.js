const mongoose=require("mongoose");
const postSchema= mongoose.Schema({
    Author_Name:{type:String,required:true},
    Notice_Title:{type:String,required:true},
    Notice_Description:{type:String,required:true},
    Date:{type:Date,required:true}
})
const PostModel=mongoose.model("post",postSchema);
module.exports={
    PostModel
}