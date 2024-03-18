import connectDB from "../index.js"
import Dog from "../models/Dog.js"

export default async function readDog(data) {
    try {
        await connectDB()
        const { identifier } = data
        return await Dog.findById(identifier)
    } catch (e) {
        console.log(e)
        throw new Error("Unable to read dog. Invalid data or database issue.")
    }
}