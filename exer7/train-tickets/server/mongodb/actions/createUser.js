import connectDB from "../index";
import User from "../models/User";

export default async function createUser(data) {
    try {
        await connectDB()
        const user = new User(data)
        await user.save()
    } catch (error) {
        console.log(error)
        throw new Error("Failed to create ticket. Please ensure the data is valid and try again.")
    }

}