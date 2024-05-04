let studentProfile = {
    firstName: "Sushant",
    lastName: "Gupta",
    class: {
        name: "Introduction to react JS",
        teacher: {
            name: "Ajay Kumar",
            email: "example@abc.com"
        }
    },
    grade: {
        Math: "A",
        Science: "B"
    }
};

console.log("Student full name using dot notation:")
console.log(`${studentProfile.firstName} ${studentProfile.lastName}`);

console.log("class name using bracket notation:")
console.log(studentProfile.class["name"]);

console.log("Techers email using mix of dot and bracket:")
console.log(studentProfile.class.teacher["email"]);

//changing grade

studentProfile.grade.Math = "C";

console.log("Printing updated grade for Maths")
console.log(studentProfile.grade["Math"]);
