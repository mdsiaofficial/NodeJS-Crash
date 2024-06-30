
import { error } from "console";
import http from "http";
const PORT = process.env.PORT;
const server = http.createServer((req, res) => {
  // res.setHeader('Conntent-Type', 'text/html');
  // res.statusCode = 404;

  // console.log(req.url);
  // console.log(req.method);

  try {
    // check if GET req 
    if (req.method === "GET") {
      // check if url is /
      if (req.url === '/') {
        res.writeHead(300, {
          // "Content-Type": "application/json"
          "Content-Type": "text/html"
        });
    
        res.end('<h1>Hello World</h1>');
    
      } else {
        res.writeHead(404, {
          // "Content-Type": "application/json"
          "Content-Type": "text/html"
        });
    
        res.end('<h1>Not Found</h1>');
      }
    } else {
      throw new Error("Method not allowed.");
    }
  } catch (error) {
    res.writeHead(500, {
      "Content-Type": "text/plain"
    });

    res.end('<h1>Server Error</h1>');
  }
  
  // res.end(JSON.stringify({ message: "server error" }));
});

// app.post("/user", () => {
//   console.log("user post");
// })
server.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT} `);
});