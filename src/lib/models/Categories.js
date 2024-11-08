import mongoose from "mongoose";
const { Schema } = mongoose;

const categoriesSchema = new Schema({
    title:{type: String, required : true},
    description:{type: String, required : true},
    thumbnail:{type: String, required : true},

})

export const CategoryModel= mongoose.models.Categories || mongoose.model("Categories",categoriesSchema);