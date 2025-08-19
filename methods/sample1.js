// greet method
function greet() {
    return `My name is ${person1.name} and I am ${person1.age} years old.`;
}

// person1 object
const person1 = {
    name: "Pavan Mani Sankar",
    age: 22,
    greet
}
console.log(person1.greet());

// or

// person2 object
const person2 = {
    name: "Ronaldo",
    age: 40,
    greet: function() {
        return `My name is ${person1.name} and I am ${this.age} years old.`;
    },
};
console.log(person2.greet());