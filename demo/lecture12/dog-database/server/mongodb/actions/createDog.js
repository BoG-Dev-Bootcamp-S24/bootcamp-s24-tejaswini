import connectDB from "..";
import Dog from "../models/Dog";

export default async function createDog(data) {
    try {
        await connectDB();
        const dog = new Dog(data);
        await dog.save();
    } catch (e) {
        console.log(e)
        throw e
    }
}