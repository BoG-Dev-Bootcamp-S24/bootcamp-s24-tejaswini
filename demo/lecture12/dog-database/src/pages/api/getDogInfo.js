import readDog from "../../../server/mongodb/actions/readDog.js"

export default async function handler(req, res) {
    if (req.method == 'GET') {
        try {
            const result = await readDog(req.query)
            return res.status(200).send(result)
        } catch (e) {
            return res.status(500).send("Unable to read dog")
        }
    }
}