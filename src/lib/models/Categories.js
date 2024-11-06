import mongoose from "mongoose";

const { Schema } = mongoose;

const categoriesSchema= new Schema({
    title:String,
    description:String,
    thumbnail:String,

})

export const CategoryModal= mongoose.model("Categories",categoriesSchema);