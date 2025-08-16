// Write a function filterNumbers that takes an array and a callback to filter the array based on a condition (e.g., only even numbers).

function filterNumbers(arr, callback) {
     return callback(arr);
}

const arr = [1,2,3,4,5,6,7,8,9,10];
console.log(filterNumbers(arr, function(arr) {
    const evenArr = [];
    for(let i of arr) {
        if(i % 2 === 0) evenArr.push(i);
    }
    return evenArr;
}));