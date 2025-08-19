// 4. Create a calculator object with methods add, subtract, multiply, and divide.

const calculator = {

    add: function(x, y) {
        return `Addition: ${x+y}`;
    },

    subtraction: function(x, y) {
        return `Subtraction(abs): ${Math.abs(x-y)}`;
    },

    multiplication: function(x, y) {
        return `Multiplication: ${x*y}`;
    },
    
    division: function(x, y) {
        return y !== 0 ? `Division: ${x/y}` : `Division by zero(0) error`;
    }
};

console.log(calculator.add(10, 5));
console.log(calculator.subtraction(10, 25));
console.log(calculator.multiplication(15, 5));
console.log(calculator.division(19, 5));