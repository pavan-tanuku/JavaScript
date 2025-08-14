const largestElement = (arr) => {
    let maxNum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(maxNum < arr[i]) maxNum = arr[i];
    }
    return maxNum;
}


const arr = [1, 15, 753, 133, 3461.2];
console.log(largestElement(arr));