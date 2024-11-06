import mongoose from 'mongoose';
const { Schema } = mongoose;

const eventsSchema=new Schema({
    title:String,
    description:String,
    startTime:String,
    endTime:String,
    startDate:String,
    endDate:String,
    location:{
        lat:Number,
        long:Number,
    },
    createdBy:{type: mongoose.Types.objectId,ref:"Users"},
    address:String,
    going:[{type: mongoose.Types.objectId,ref:"Users"}],
});
export const EventsModal=mongoose.model("Events",eventsSchema);

