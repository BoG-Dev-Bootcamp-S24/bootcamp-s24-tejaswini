import createDog from "../../../server/mongodb/actions/createDog";

export default async function addDog(req, res) {
    if (req.method === "POST") {
        try {
            await createDog(req.body);
            return res.status(200).send("Dog created successsfully");
        } catch (e) {
            return res.status(405).send("Error creating dog");
        }
    } else {
        return res.status(405).send("Method not allowed");
    }
}