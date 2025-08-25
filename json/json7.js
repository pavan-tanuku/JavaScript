// Convert a JSON string back into a JS object using JSON.parse().

const jsonString = '{ "name" : "Rahul", "age" : 22 }';

const jsonObject = JSON.parse(jsonString);
console.log("The parsed json string is", jsonObject);
console.log("The type of the jsonObject is", typeof jsonObject);