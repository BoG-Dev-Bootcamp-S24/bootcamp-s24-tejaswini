import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    }
})

export default mongoose.models?.User || mongoose.model("User", userSchema)