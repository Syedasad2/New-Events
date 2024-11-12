import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema= new Schema({
    fullname:String,
    email:String,
    passwrod:String,
    location:{
        lat:Number,
        long:Number,
    },
    profileImg:String,
    address:String,
    bio:String,
    role: {type: String, 
        default :"user",
        enum : ["user","admin"],
    },
});
export const UserModel = 
mongoose.models.Users || mongoose.model("Users",userSchema);

