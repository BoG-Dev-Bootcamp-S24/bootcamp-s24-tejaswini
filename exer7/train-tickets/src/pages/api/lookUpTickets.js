import readTicketsByUser from '../../../server/mongodb/actions/readTicketsByUser';

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const { userID } = req.query;
            const request = await readTicketsByUser(userID);

            if (!request) {
                return res.status(400).send("Failed to find user.");
            } else {
                return res.status(200).send(request);
            }
        } catch (error) {
            console.error("Error:", error);
            return res.status(500).send("Failed to read tickets.");
        }
    } else {
        return res.status(405).send("Method not allowed");
    }
}
