import createDog from "../../../server/mongodb/actions/createDog.js"

export default async function handler(req, res) {
    if (req.method == 'POST') {
        try {
            await createDog(req.body)
        } catch (e) {
            return res.status(500).send("Unable to save dog")
        }
        return res.status(200).send("Successfully saved dog")
    }
}