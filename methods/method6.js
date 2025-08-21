// 6. Create an object student with properties (name, marks) and a method getGrade that returns "Pass" if marks ≥ 35, otherwise "Fail".

const student = {
    name: "Pavan Mani Sankar",
    marks: 90.9,
    getGrade: function() {
        return this.marks >= 35 ? "Pass" : "Fail";
    }
};

console.log(`The result is ${student.getGrade()}.`);