// Write a function mapArray that takes an array and a callback to transform each element (e.g., multiply by 2).
function mapArray(arr, cb) {
    console.log("The every element in the array is doubled.");
    console.log(cb(arr));
}

// const arr = [1,2,3,4,5,6,7,8,9,10];
// mapArray(arr, function(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         arr[i] *= 2;
//     }
//     return arr;
// })

// copilot suggestion
const arr = [1,2,3,4,5,6,7,8,9,10];
mapArray(arr, function(arr) {
    // Use arr.length instead of arr.size
    // Avoid mutating the original array; return a new array
    return arr.map(num => num * 2);
});