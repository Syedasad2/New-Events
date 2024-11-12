import connectDb from "@/lib/db/connectDb";
import { SubCategorymodal } from "@/lib/models/subcategories";

export async function GET(request) {
 await connectDb();
 const reqUrl = request.url;
 const { searchParams } = new URL(reqUrl);
 const query = {};
 if(searchParams.get("category")){
  query.category = searchParams.get("category");
 }

 const subCategories = await SubCategorymodal.find(query);

 return Response.json( {
  msg: "SubCategories Fetched Successfully",
  subCategories,
},{ status: 200});

}

export async function POST(request){
  await connectDb();
  const obj = await request.json();
  let newSubCategory = new SubCategorymodal(obj);
  await newSubCategory.save();
  return Response.json(
    {
    msg:"SubCategories added successfull", 
    newSubCategory: newSubCategory,
  },
  { status: 201 }
);
}

export async function PUT(request) {}

export async function DELETE(request) {}
