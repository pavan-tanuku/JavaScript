// Write a function factorial that returns the factorial of a number.

function fact(n){
    let pro = 1;
    for(let i = 1; i <= n; i++) {
        pro *= i;
    }
    return pro;
}

let n = 5;
console.log(fact(n));