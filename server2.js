import { createServer } from 'http';
const PORT = process.env.PORT;

const users = [
  { id: 1, name: 'Ashiq' },
  { id: 2, name: 'Chester' },
  { id: 3, name: 'Wick' },
  { id: 4, name: 'Baba Yaga' },
];

// Logger Middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
}

// JSON middleware
const jsonMiddleware = (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
}

// Route handler for GET /api/users
const getUserHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
}

// Route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
  const id = req.url.split('/')[3];
  // console.log(id);
  const user = users.find((user) => user.id === parseInt(id));
  res.setHeader('Content-Type', 'application/json');

  if (user) {
    res.write(JSON.stringify(user));
    
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: `User ${id} not found` }));

  }

  res.end();
}

// Route handler for POST /api/users
const createUserHandler = (req, res) => {
  let body = '';
  // listen for data
  req.on('data', (chunk) => {
    body += chunk.toString();
  });
  req.on('end', () => {
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.statusCode = 201;
    res.write(JSON.stringify(newUser));
    res.end();
  });
};

// Not Found handler
const notFoundHandler = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 404;
  res.write(JSON.stringify({ message: 'Route not found' }));
  res.end();
}
const server = createServer((req, res) => {

  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === '/api/users' && req.method === 'GET') {
        getUserHandler(req, res);
      } else if (
        req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'
      ) {
        getUserByIdHandler(req, res);
      } else if (req.url === '/api/users' && req.method === 'POST') {
        createUserHandler(req, res);
      } else {
        notFoundHandler(req, res);
      }
    });
  });

});

server.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT} `);
});