// cypto
import crypto from 'crypto';

// const hash = crypto.createHash('sha256');
// hash.update('password1234');
// console.log(hash.digest('hex'));

// randomBytes()
// crypto.randomBytes(16, (err, buf) => {
//   if (err) throw err;
//   console.log(buf.toString('hex'));
// });

// createCipheriv
// createDeciipheriv
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update("Hello there!");
encrypted += cipher.final('hex');
console.log(encrypted);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
decrypted += decipher.final('utf-8');
console.log(decrypted);