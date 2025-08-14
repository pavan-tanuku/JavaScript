const filterEven = (arr) => {
    let evenArray = [];
    for (let i of arr) {
        if(i % 2 === 0) {
            evenArray.push(i);
        }
    }
    return evenArray;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterEven(arr));