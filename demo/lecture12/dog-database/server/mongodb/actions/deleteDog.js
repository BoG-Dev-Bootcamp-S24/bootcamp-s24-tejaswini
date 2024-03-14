import connectDB from "../index.js"
import Dog from "../models/Dog.js"

export default async function deleteDog(data) {
    try {
        await connectDB()
        const { identifier } = data
        await Dog.findByIdAndDelete(identifier)
    } catch (e) {
        console.log(e)
        throw new Error("Unable to delete dog. Invalid data or database issue.")
    }
}