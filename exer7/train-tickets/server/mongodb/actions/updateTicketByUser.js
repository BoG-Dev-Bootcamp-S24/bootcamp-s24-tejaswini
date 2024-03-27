import connectDB from "../index.js";
import Ticket from "../models/Ticket.js";
import User from "../models/User.js"

export default async function updateTicketByUser(data) {
    try {
        await connectDB();
        const { ticketID, userID } = data;
        const existingUser = await User.findOne({_id : userID});
        const existingTicket = await Ticket.findOne({ _id: ticketID });
        if (!existingUser) {
            return false;
        }
        if (!existingTicket) {
            return null;
        }
        const updatedTicket = await Ticket.findByIdAndUpdate(ticketID, { userID });
        return updatedTicket;
    } catch (error) {
        console.log(error)
        throw new Error("Failed to update ticket. Please ensure the data is valid and try again.");
    }
}
