import deleteTicket from "../../../server/mongodb/actions/deleteTicket"; 

export default async function handler(req, res) {
    if (req.method === "DELETE") {
        try {
            const ticket = await deleteTicket(req.query.ticketID);
            if (ticket === null) {
                return res.status(400).send("Ticket Not Found");
            }
            return res.status(200).send("Ticket deleted successfully.");
        } catch(error) {
            console.error(error);
            return res.status(500).send("Failed to delete ticket.");
        }
    }
    
}