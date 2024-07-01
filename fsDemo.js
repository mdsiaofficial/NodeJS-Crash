// import fs from 'fs';
import fs from 'fs/promises';

// ⛔ ->  readFile() - callback
// fs.readFile('./text.md', 'utf-8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// ⛔ ->  readFileSync() - Synchronous version
// const data = fs.readFileSync('./text.md', 'utf-8');
// console.log(data);

// ⛔ ->  readFile() - Promise .then().catch()
// fs.readFile('./text.md', 'utf-8')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// ⛔ ->  readFile() - async/await
const readFile = async () => {
  try {
    const data = await fs.readFile('./text.md', 'utf-8');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
const writeFile = async () => {
  try {
    await fs.writeFile('./text.md', '\n This line is adding...');
    console.log("File written successfully...");
  } catch (error) {
    console.log(error);
  }
};

const appendFile = async () => {
  await fs.appendFile("./text.md", '\n append new line here...');
  console.log("File appended.");
}

writeFile();
appendFile();
readFile();



// WRITE FILE



