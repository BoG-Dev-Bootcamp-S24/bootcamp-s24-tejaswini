import updateDog from "../../../server/mongodb/actions/updateDog.js"

export default async function handler(req, res) {
    if (req.method == 'PATCH') {
        try {
            await updateDog(req.body)
        } catch (e) {
            return res.status(500).send("Unable to update dog")
        }
        return res.status(200).send("Successfully updated dog")
    }
}