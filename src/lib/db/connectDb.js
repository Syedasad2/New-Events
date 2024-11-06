import mongoose from "mongoose";


export default async function connectDb(){
   
    try{
       
       let connection = await mongoose.connect(process.env.MONGODB_URI);
       console.info('MongoDB Connected');
       
    } catch(err){
        console.log(err);
        
    }
}