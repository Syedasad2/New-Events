import mongoose from "mongoose";

const { Schema } = mongoose;

const subCategoriesSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  thumbnail: { type: String, required: true },
  category: { type: mongoose.Types.ObjectId, ref: "Categories", required: true },
});

export const subCategoriesmodal =
  mongoose.models.subCategories || mongoose.model("SubCategories", subCategoriesSchema);
