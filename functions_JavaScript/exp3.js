// Write a function isEven that checks if a number is even and returns true or false.

function isEven(num) {
    if(num % 3 === 0)
        return true;
    else 
        return false;
}

console.log(isEven(9));