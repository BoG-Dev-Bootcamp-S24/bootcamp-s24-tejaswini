import {users} from "./_data";

export default function handler(req, res) {
    if (req.method === "DELETE") {
        const {id} = req.query;
        const newUsers = user.filter((user) => user.id !== id);
        console.log(newUsers);
        const deletedUser = users.filter((user) => user.id === id);
        if (deletedUser.length === 0) {
            res.status(400).json({error: "Invalid user ID"});
            return;
        }
        res.status(200).json(deletedUser);
    }
}