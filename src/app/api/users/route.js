import connectDb from "@/lib/db/connectDb";
import { UserModel } from "@/lib/models/User";



export async function GET(request) {
 await connectDb();
 const users = await UserModel.find();
 return Response.json( {
  msg: "Users Fetched Successfully",
  users,
},{ status: 200});

}

export async function POST(request){
  await connectDb();
  const obj = await request.json();
  let newUser = new UserModel(obj);
  await newUser.save();
  return Response.json({
    msg:"User added successfull", user : newUser,
  }, { status: 201 });
}

export async function PUT(request) {}

export async function DELETE(request) {}
