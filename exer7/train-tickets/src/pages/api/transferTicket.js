import updateTicketByUser from "../../../server/mongodb/actions/updateTicketByUser";

export default async function handler(req, res) {
    if (req.method === "PATCH") {
        try {
            const request = await updateTicketByUser(req.body);
            if (request === null) {
                return res.status(400).send("Ticket not found.");
            } else if (request === false) {
                return res.status(400).send("User not found.");
            }
            return res.status(200).send("Ticket updated successfully.");
        } catch(error) {
            console.error(error);
            return res.status(500).send("Failed to update ticket.");
        }
    }
    
}