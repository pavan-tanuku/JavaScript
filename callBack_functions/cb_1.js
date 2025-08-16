// Write a function processUserInput that takes a name and a callback, and the callback should display "Welcome, <name>".

function processUserInput(name, callback) {
    callback(name)
}

processUserInput("Pavan Mani Sankar", function(name) {
    console.log(`Welcome, ${name}`)
})