// Write a function checkNumber that takes a number and two callbacks — one for if it’s even, another for if it’s odd.

function even_odd(number, cb_Even, cb_Odd) {
    if(number % 2 === 0) cb_Even(number);
    else cb_Odd(number);
}

even_odd(112, function(number) {
    console.log(`${number} is even.`);

},
function(number) {
    console.log(`${number} is odd`);
});