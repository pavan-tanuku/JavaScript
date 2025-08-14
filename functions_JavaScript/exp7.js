// Write a function countVowels that returns the number of vowels in a string.

function countVowels(str) {
    let count = 0;
    for(let char of str) {
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U' ) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Sasi Institute of Technology And Engineering"));
