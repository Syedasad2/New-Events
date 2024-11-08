import connectDb from "@/lib/db/connectDb";
import { CategoryModel } from "@/lib/models/Categories";


export async function GET(request) {
 await connectDb();
 const categories = await CategoryModel.find();
 return Response.json( {
  msg: "Categories Fetched Successfully",
  categories,
},{ status: 200});

}

export async function POST(request){
  await connectDb();
  const obj = await request.json();
  let newCategory = new CategoryModel(obj);
  await newCategory.save();
  return Response.json({
    msg:"Categories added successfull", categories : newCategory,
  }, { status: 201 });
}

export async function PUT(request) {}

export async function DELETE(request) {}
