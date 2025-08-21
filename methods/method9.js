// 9. Create an object circle with a property radius and a method getCircumference.

const circle = {
    radius: 5,
    getCircumference: function() {
        return (Math.PI * (this.radius**this.radius));
    }
};

console.log(`The area of the circle is: ${circle.getCircumference()}.`);