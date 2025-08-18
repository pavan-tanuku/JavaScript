// Write a function stringManipulator that takes a string and a callback to modify the string (e.g., reverse, uppercase)
function stringManipulator(str, cb) {
    console.log("The modified string is:");
    console.log(cb(str));
}

// Example usage:
stringManipulator("hello", function(str) {
    return str.toUpperCase();
});

stringManipulator("world", function(str) {
    return str.split("").reverse().join("");
});