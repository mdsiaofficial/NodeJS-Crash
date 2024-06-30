import { createServer } from 'http';
const PORT = process.env.PORT;
const users = [
  { id: 1, name: 'Ashiq' },
  { id: 2, name: 'Chester' },
  { id: 3, name: 'Wick' },
  { id: 4, name: 'Baba Yaga' },
];

const server = createServer((req, res) => {
  if (req.url === '/api/users' && req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(users));
    res.end();

  } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {

    const id = req.url.split('/')[3];
    // console.log(id);
    const user = users.find((user) => user.id === parseInt(id));
    if (user) {
      res.setHeader('Content-Type', 'application/json');
      res.write(JSON.stringify(user));
      res.end();
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 404;
      res.write(JSON.stringify({ message: `User ${id} not found` }));
      res.end();
    }


  } else {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
    res.write(JSON.stringify({ message: 'Route not found' }));
    res.end();

  }
});

server.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT} `);
});