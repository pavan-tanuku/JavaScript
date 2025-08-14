const sumSubArray = (arr) => {
    let sum = 0;
    for(let i of arr) {
        sum += i;
    }
    return sum;
}

console.log(sumSubArray([12, 16, 19, 35, 8, 9, 753]));