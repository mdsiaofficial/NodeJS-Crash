import fs from 'fs/promises';
import path from 'path';
import url from 'url';

import http from "http";
const PORT = process.env.PORT;

// Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// console.log(__filename, __dirname);

const server = http.createServer(async (req, res) => {
  // res.setHeader('Conntent-Type', 'text/html');
  // res.statusCode = 404;

  // console.log(req.url);
  // console.log(req.method);

  try {
    // check if GET req 
    if (req.method === "GET") {
      let filePath;

      // check if url is /
      if (req.url === '/') {
        
        // res.writeHead(200, {
        //   // "Content-Type": "application/json"
        //   "Content-Type": "text/html"
        // });
        // res.end('<h1>Homepage</h1>');
        filePath = path.join(__dirname, 'public', 'index.html');

      } else if (req.url === '/about') {

        // check if url is /about
        // res.writeHead(200, {
        //   // "Content-Type": "application/json"
        //   "Content-Type": "text/html"
        // });
        // res.end('<h1>Aboutpage</h1>');
        filePath = path.join(__dirname, 'public', 'about.html');
      } else {

        
        // res.writeHead(404, {
        //   // "Content-Type": "application/json"
        //   "Content-Type": "text/html"
        // });
        // res.end('<h1>Not Found</h1>');

        throw new Error('Not Found');
      }

      const data = await fs.readFile(filePath);
      res.setHeader('Conten-Type', 'text/html');
      res.write(data);
      res.end();
      
    } else {
      throw new Error("Method not allowed.");
    }
  } catch (error) {
    res.writeHead(500, {
      "Content-Type": "text/plain"
    });

    res.end('Server Error !!!');
  }
  
  // res.end(JSON.stringify({ message: "server error" }));
});

// app.post("/user", () => {
//   console.log("user post");
// })
server.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT} `);
});