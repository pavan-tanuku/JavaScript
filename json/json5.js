// Create a JSON array of employees, where each employee has id, name, and salary.

const employees = [

    {
        id: 601,
        name: "chandu",
        salary: 100000
    },

    {
        id: 602,
        name: "Shekar",
        salary: 120000
    },

    {
        id: 603,
        name: "satish",
        salary: 110000
    },

    {
        id: 605,
        name: "venkey",
        salary: 115000
    },

    {
        id: 606,
        name: "loki",
        salary: 125000
    }
];

console.log("Employees JSON Array: \n", employees);
console.log();

console.log("Employees JSON: \n", JSON.stringify(employees, null, 2));
console.log();

console.log("Parsed Employees Array: \n", JSON.parse(JSON.stringify(employees)));
