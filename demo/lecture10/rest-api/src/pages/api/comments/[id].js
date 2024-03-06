export default function handler(req, res) {
    const { query: { id } } = req;
  
    if (req.method === 'GET') {
      res.status(200).json({ message: `Returning post with id ${id}` });
    } else if (req.method === 'PATCH') {
      res.status(200).json({ message: `Post with id ${id} updated` });
    } else if (req.method === 'DELETE') {
      res.status(204).end(); 
    } else {
      res.setHeader('Allow', ['GET', 'PATCH', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }