// Create a JSON object for a student with properties: name, age, rollNo, and marks.

const student = {
    name : "Sam Altman",
    age: 50,
    rollNo: 604,
    marks: {
        AI: 90,
        Math: 99,
        Science: 100
    }
};

console.log('Student Object: ');
console.log(student);
console.log("");

// convert the student object to a JSON string
const stringJson =JSON.stringify(student);
console.log("JSON String: ");
console.log(stringJson);
console.log("");

// convert the JSON string back to an object
const parsedObject = JSON.parse(stringJson);
console.log("Parsed Object: ");
console.log(parsedObject);