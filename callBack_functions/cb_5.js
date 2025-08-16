// Write a function delayedMessage that takes a message and a callback to display the message after 2 seconds.

function displayMessage(message, cb) {
    console.log('Hello, Pavan Mani Sankar!');
    setTimeout(() => {
        cb(message);
    },5000); //5 seconds
}

displayMessage("This is callBack", function(message) {
    console.log(message);
});