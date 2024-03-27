import connectDB from "../index";
import Ticket from "../models/Ticket";

export default async function createTicket(data) {
    try {
        await connectDB()
        const ticket = new Ticket(data)
        await ticket.save()
    } catch (error) {
        console.log(error)
        throw new Error("Failed to create ticket. Please ensure the data is valid and try again.")
    }

}