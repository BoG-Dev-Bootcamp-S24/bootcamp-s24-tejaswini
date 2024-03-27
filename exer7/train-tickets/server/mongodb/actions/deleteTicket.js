import connectDB from "../index.js"
import Ticket from "../models/Ticket.js"

export default async function deleteTicket(data) {
    try {
        await connectDB()
        await Ticket.findByIdAndDelete(data)
    } catch (error) {
        console.log(error)
        throw new Error("Failed to delete ticket. Please ensure the data is valid and try again.")
    }
}