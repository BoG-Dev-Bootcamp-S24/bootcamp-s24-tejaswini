import connectDB from "../index.js";
import Ticket from "../models/Ticket.js";
import User from "../models/User.js";

export default async function readTicketsByUser(data) {

    try {
        await connectDB();
        const existUser = await User.findOne({_id : data});
        return (!existUser ? false : await Ticket.find({userID: data}))

    } catch (error) {
        console.log(error);
        throw new Error("Failed to read tickets. Please ensure the data is valid and try again.");
    }
    
}