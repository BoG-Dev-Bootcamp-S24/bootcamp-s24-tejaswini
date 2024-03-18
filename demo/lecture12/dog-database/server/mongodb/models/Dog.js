import mongoose from "mongoose";

const dogSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    breed: String

})


export default mongoose.model("Dog", dogSchema)