//1. **Spread Operator with Arrays**:
let array1 = [1,2,3];
let array2 = [4,5,6];
let combinedArray = [...array1,...array2];

console.log(combinedArray);

//adding element at first and last
//first option
let combinedArray1 = ["elementatfirst",...combinedArray,"elementatlast"];

console.log('combined array using first option:');
console.log(combinedArray1);

//second option
//to add at the beggining
combinedArray.unshift("elementatfirst");

//to add at the end
combinedArray.push("elementatlast");

let argCount = combinedArray.length;
let argcounthalf = Math.floor(argCount/2);

//to add element at middle
combinedArray.splice(4,0,"elementatmiddle");

console.log('combined array using second option:');
console.log(combinedArray);




//2. **Spread Operator with Objects**:

let object1 = {
    name: "sushant",
    age: "33",
    married: "Yes"
};
let object2 = {
    city: "Bangalore",
    state: "Karnataka",
    country: "India"
};

let combinedObject = {...object1,...object2};

console.log("after merging 2 objects:");
console.log(combinedObject);

let newProperty = {
    pincode: "560064"
};

//combinedObject.pincode = "560064";

//using spread
let combinedObject1 = {...combinedObject,...newProperty};

console.log("after adding new property, 1st way");
console.log(combinedObject1);

let combinedObject2 = {...combinedObject,pincode: "560064"};

console.log("after adding new property, 2nd way");
console.log(combinedObject2);




//3. **Spread Operator in Function Calls**:

function sum(num1,num2,num3){
    return num1+num2+num3;
}

let numbers = [1,2,7];

let result = sum(...numbers);

console.log('sum using spread is:');
console.log(result);   //Expected output 10

