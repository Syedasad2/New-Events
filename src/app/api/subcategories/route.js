import connectDb from "@/lib/db/connectDb";
import { subCategoriesmodal } from "@/lib/models/subCategories";

export async function GET(request) {
  try {
    await connectDb();
    const subcategories = await subCategoriesmodal.find();
    return Response.json({
      msg: "SubCategories Fetched Successfully",
      subcategories: subcategories || [], 
    }, { status: 200 });
  } catch (error) {
    return Response.json({
      msg: "Failed to fetch SubCategories",
      error: error.message,
    }, { status: 500 });
  }
}
export async function POST(request) {
  try {
    await connectDb();
    const obj = await request.json();
    const newSubCategory = new subCategoriesmodal(obj);
    await newSubCategory.save();
    return Response.json({
      msg: "SubCategory Added Successfully",
      subcategory: newSubCategory, 
    }, { status: 201 });
  } catch (error) {
    return Response.json({
      msg: "Failed to add SubCategory",
      error: error.message,
    }, { status: 500 });
  }
}


export async function PUT(request) {

}

export async function DELETE(request) {

}
