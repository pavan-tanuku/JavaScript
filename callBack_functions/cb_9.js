// Write a function askQuestion that asks a question (string) and calls a callback with the user’s answer.
function askQuestion(question, callback) {
    console.log(question);
    const answer = "My name is 'Pavan Mani Sankar'"; // Simulating user input
    callback(answer);
}

// Example usage:
askQuestion("What is your name?", function(name) {
    console.log("Hello, " + name + "!");
});