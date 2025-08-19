// 3. Add a method isAdult to the person object that returns true if age ≥ 18, else false.

const person = {
    name: "Pavan Mani Sankar",
    age: 22,
    isAdult: function () {
        return this.age >= 18 ? true : false;
    }
};

console.log(person.isAdult());
