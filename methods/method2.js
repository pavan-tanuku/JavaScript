// 2. Create an object person with a method introduce that prints "Hi, my name is <name> and I am <age> years old".

const person = {
    name: "Pavan Mani Sankar",
    age: 22,
    greet: function() {
        return `Hi, my name is ${person.name} and I am ${this.age} years old.`
    }
};

console.log(person.greet());