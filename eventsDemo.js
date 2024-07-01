import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();
function greetHandler(name) {
  console.log('Greet' , name);
}

function goodbyeHandler( name ) {
  console.log('Goodbye' , name);
}

// register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

// emit events
myEmitter.emit('greet', "Ashiq");
myEmitter.emit('goodbye', "Ashiq");

// error handling
myEmitter.on("error", (err) => {
  console.log("An error occured!!!", err);
});

// Simulate error
myEmitter.emit('error', new Error('Something wrong!'));