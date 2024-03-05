// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}

// create user - POST /api/users
// update user - PATCH /api/users/:id
// delete user - DELETE /api/users/:id
// read user(s) - GET /api/users, GET /api/users/:id
