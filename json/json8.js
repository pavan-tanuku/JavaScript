// Parse this JSON string into a JS object and access the city:
// {"name": "Amit", "age": 25, "city": "Hyderabad"}

const jsonStr = '{"name" : "Amit", "age" : 25, "city" : "Hyderabad"}'

// converting json string to json object

const jsonObj = JSON.parse(jsonStr);
console.log(`The converted json String into json object is: ${jsonObj}.`);