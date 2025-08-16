// Write a function calculate that takes two numbers and a callback function (e.g., add, subtract, multiply) to perform the operation.

function calculate(num1, num2, callback) {
    callback(num1, num2);
}

calculate(15, 34, function(num1, num2) {
    let addition = num1 + num2;
    let subtraction = num1 - num2;
    let multiplication = num1 * num2;
    let division = num1 / num2;

    console.log(`Addition of ${num1} and ${num2} is: ${addition}`);
    console.log(`Subtraction of ${num1} and ${num2} is: ${subtraction}`);
    console.log(`Multiplication of ${num1} and ${num2} is: ${multiplication}`);
    console.log(`Division of ${num1} and ${num2} is: ${division}`);
});