// Create a JSON object for a car with brand, model, year, and colors (as an array).

const car = {
    brand: "Tesla",
    model: "Model S",
    year: 2020,
    colors: ["red", "white", "black"]
};

console.log(`Car JSON Object: \n`, car);
console.log();

console.log(`Car JSON String: \n`, JSON.stringify(car));
console.log();

console.log(`Parsed Car Object: \n`, JSON.parse(JSON.stringify(car)));
