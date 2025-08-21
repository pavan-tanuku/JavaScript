// 10. Create an object book with properties (title, author, pages) and a method getSummary that returns "Title: ..., Author: ..., Pages: ...".

const book = {
    title: "Wings of Fire",
    author: "A. P. J. Abdul Kalam",
    Pages: 900,
    getSummary: function() {
        console.log(`The title of the book is: ${this.title}.`);
        console.log(`The author of the book is: ${this.author}.`);
        console.log(`The pages of the book is: ${this.Pages}.`);
    }
};

book.getSummary();