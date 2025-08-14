// Write a function reverseString that returns the reverse of a given string.

function reverseString(str) {
    let reverseWords = '';
    for(let i = str.length - 1; i >= 0; i--) {
        reverseWords += str[i];
    }
    return reverseWords;
}

let str = "Pavan Mani Sankar";
console.log(reverseString(str));