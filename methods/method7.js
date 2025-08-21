// 7. Add a method updateYear to the car object that increases the year by 1.

const car = {
    car : "LandRover",
    model: "Defender",
    year: 2025,
    updateYear: function() {
        this.year++;
        return this.year;
    }
};

console.log(`The model Year after undation is: ${car.updateYear()}.`);