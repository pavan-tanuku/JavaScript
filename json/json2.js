// Create a JSON object for a book with title, author, pages, and isAvailable.
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    isAvailable: true
};

console.log("Book JSON Object: \n", book);
console.log();

console.log("Book JSON String: \n", JSON.stringify(book));
console.log();

console.log("Parsed Book Object: \n", JSON.parse(JSON.stringify(book)));
