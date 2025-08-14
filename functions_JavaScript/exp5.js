// Write a function maxNumber that takes three numbers and returns the largest.

function largestNum (num1, num2, num3) {
    if(num1 > num2 && num1 > num3) {
        return num1;
    } else if(num2 > num1 && num2 > num3) {
        return num3;
    } else {
        return num3;
    }
}

console.log(largestNum(10, 100, 1000));