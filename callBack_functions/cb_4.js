// Write a function forEachElement that takes an array and a callback and applies the callback to each element.

function forEachElement(arr, callback) {
    for(let i of arr) {
        callback(i);
    }
}

const arr = [1, 2, 3, 4, 5];
forEachElement(arr, function(element) {
    console.log(element);
});