console.log(process.argv);

// process.env

console.log(process.env.COMPUTERNAME);

// pid
console.log(process.pid);

// cwd()
console.log(process.cwd());

// title
console.log(process.title);

// memoryUsage()
console.log(process.memoryUsage());

// update()
console.log(process.uptime());

// log the exit 
process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
})

// exit()
process.exit(0);

console.log("Hello after exit.")