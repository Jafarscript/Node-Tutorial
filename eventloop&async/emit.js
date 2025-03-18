const EventEmitter = require('events')
const myEmitter = new EventEmitter()

// Register an events
myEmitter.on("greet", (name) => {
    console.log(`Hello ${name}!`)
})


myEmitter.emit("greet", "Jafar")