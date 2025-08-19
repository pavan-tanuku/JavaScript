// 1. Create an object car with properties (brand, model, year) and a method getDetails that returns "Brand: <brand>, Model: <model>, Year: <year>".

const car = {
    brand: "Land Rover",
    model: "Defender",
    year: 2025,
    getDetails: function() {
        return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
    }
};

console.log(car.getDetails());