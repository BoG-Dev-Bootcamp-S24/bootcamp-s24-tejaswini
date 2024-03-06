// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ message: "Returning all posts" });
  } else if (req.method === 'POST') {
    res.status(201).json({ message: "Post created" });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

// create user - POST /api/users
// update user - PATCH /api/users/:id
// delete user - DELETE /api/users/:id
// read user(s) - GET /api/users, GET /api/users/:id
