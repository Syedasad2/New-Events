import connectDb from "@/lib/db/connectDb";
import { UserModal } from "@/lib/models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request) {
  await connectDb();
  const { email, password } = await request.json();
  console.log('email,password',email,password);
  

  if (!email || !password) {
    return Response.json(
      { error: true, msg: "Email and password are required" },
      { status: 400 }
    );
  }

  const user = await UserModal.findOne({ email });
  console.log('user',user);

  if (!user || !user.password) {
    return Response.json(
      { error: false, msg: "succesfully login" },
      { status: 401 }
    );
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return Response.json(
      { error: true, msg: "Invalid email or password" },
      { status: 401 }
    );
  }

  const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_KEY);

  return Response.json(
    {
      msg: "Login successful",
      user: { _id: user._id, email: user.email, role: user.role },
      token,
    },
    { status: 200 }
  );
}

