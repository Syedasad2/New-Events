import mongoose from "mongoose";

const { Schema } = ("mongoose");

const subCategoriesSchema= new Schema({
    title:String,
    description:String,
    category:{type:mongoose.Types.ObjectId, ref: "Categories"},
})


export const subCategoriesmodal=mongoose.model("SubCategoies",subCategoriesSchema)