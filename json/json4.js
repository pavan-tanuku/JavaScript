// Create a JSON array of fruits with 5 fruit names.
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

console.log("Fruits JSON Array: \n", fruits);
console.log();

console.log("Fruits JSON String: \n", JSON.stringify(fruits));
console.log();

console.log("Parsed Fruits Array: \n", JSON.parse(JSON.stringify(fruits)));
