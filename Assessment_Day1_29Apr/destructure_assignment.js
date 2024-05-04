// Sample array
const fruits = ["Apple", "Banana", "Cherry"];
// Sample object
var user = {
 firstName: "John",
 lastName: "Doe",
 age: 30,
 email: "john.doe@example.com"
};

//1. **Array Destructuring**:
let firstElement = fruits[0];

let thirdElement = fruits[2];

//array destructure output for first and third element
console.log("array destructure output for first and third element");
console.log(firstElement);   //Expected Output - Apple
console.log(thirdElement);   //Expected Output - Cherry

//2. **Object Destructuring**:
let firstName = user.firstName;
let lastName = user.lastName;
let email = user.email;

console.log("Object destructure output to extract first,last name and email");
console.log(firstName);       //Expected Output - John
console.log(lastName);        //Expected Output - Doe
console.log(email);           //Expected Output - john.doe@example.com

//3. **Nested Object Destructuring**:
user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
    address: {
        street: "yelahanka",
        city: "Bangalore"
    }
};

let street = user.address.street;
let city = user.address.city;

console.log("Nested Object destructure output:");
console.log(street);        //Expected Output - yelahanka
console.log(city);          //Expected Output - Bangalore

//4. **Destructuring in Function Parameters**:

console.log("output for function destructure:")
function extract_user_details(user)
{
    console.log(user.firstName);
    console.log(user.lastName);
}

extract_user_details(user);     //Expected Output - John
                                //                  Doe