
import http from "http";
const PORT = 8000;
const server = http.createServer((req, res) => {
  // res.setHeader('Conntent-Type', 'text/html');
  // res.statusCode = 404;
  res.writeHead(500, {
    "Content-Type": "application/json"
  });
  // res.end('<h1>Hello World</h1>');
  res.end(JSON.stringify({ message: "server error" }));
});

server.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT} `);
});