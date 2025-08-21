// 8. Create an object rectangle with properties (length, width) and a method getArea that returns area.

const rectangle = {
    length: 30,
    width: 15,
    area: function() {
        return this.length * this.width;
    }
};

console.log(`The area of rectangle is: ${rectangle.area()}.`);