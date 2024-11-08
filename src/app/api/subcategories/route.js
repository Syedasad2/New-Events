import connectDb from "@/lib/db/connectDb";
import { subCategoriesmodal } from "@/lib/models/subCategories";



export async function GET(request) {
 await connectDb();
 const subcategories = await subCategoriesmodal.find();
 return Response.json( {
  msg: "SubCategories Fetched Successfully",
  subcategories,
},{ status: 200});

}

export async function POST(request){
  await connectDb();
  const obj = await request.json();
  let newSubCategory = new subCategoriesmodal(obj);
  await newSubCategory.save();
  return Response.json({
    msg:"SubCategories added successfull", subcategories :newSubCategory,
  },{ status: 201 });
}

export async function PUT(request) {}

export async function DELETE(request) {}
