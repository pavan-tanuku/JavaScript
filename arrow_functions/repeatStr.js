const repeatStr = (str, n) => {
    return str.repeat(n);
    // for(let i = 0; i < n; i++) {
    //     str += str;
    // }
}

console.log(repeatStr("hello ", 5));