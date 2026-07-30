/*
  Arrays in TypeScript
  --------------------
  - An array is a special type of variable that stores multiple values.
  - The values can be of the same data type or different data types.
  - Arrays are declared using `[]` or the generic `Array<T>` type.
  - Indexing starts from 0.
  - Arrays are an ordered collection of elements.
*/
// Approach 1: Using array literal
var names = []; // Declaration
// Initializing values into the array
names[0] = "John"; // or names.push("John");
names[1] = "Smith";
names[2] = "Peter";
names[3] = "Scott";
// Alternative way to declare and initialize an array
// let names: string[] = ["John", "Smith", "Peter", "Scott"];
// Printing the array
console.log(names); // Output: [ 'John', 'Smith', 'Peter', 'Scott' ]
console.log(names[1]); // Output: Smith
console.log(names[4]); // Output: undefined (index out of range)
// Approach 2: Using the generic Array<T> type
var empNames = ["John", "Smith", "Peter", "Scott"]; // Only strings allowed
var empIds = [101, 102, 103, 104]; // Only numbers allowed
var data = ["John", "Smith", 101, 102]; // Union type (strings and numbers)
var mixedData = [1, "John", true, null]; // Any type allowed (multi-type array)
//let employee:string[]|number[]=["ojha","more","john"]; // Union type (array of strings or array of numbers)
// Example 1: Iterating over an array using a traditional for loop
console.log("Employee Names:");
for (var i = 0; i < empNames.length; i++) {
    console.log(empNames[i]);
}
// Example 2: Iterating using the 'for...in' loop (indexes)
console.log("Employee IDs:");
for (var index in empIds) {
    console.log(empIds[index]); // `index` represents array indices
}
// Example 3: Iterating using the 'for...of' loop (values)
console.log("Mixed Data:");
for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
    var value = data_1[_i];
    console.log(value); // `value` represents actual array elements
}
//Example 4: Passing an Array to the function 
//Search an element in a n array using function 
function search(ele, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === ele) {
            return true; // Element found
        }
    }
    return false; // Element not found
}
var arr = [10, 20, 30, 40, 50];
console.log(search(20, arr)); // Output: true
console.log(search(100, arr)); // Output: false
//Example 5 : A functions takes an Array and returns an array
function capitalizeWords(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result[i] = arr[i].toUpperCase();
    }
    return result;
}
// Example usage
var words = ["hello", "world", "typescript"];
console.log(capitalizeWords(words)); // Output: ["HELLO", "WORLD", "TYPESCRIPT"]
