// Automatic Type Conversion

// Boolean operation (!) forces operand to become a Boolean.

// The values returned by || and && return the value of the last expression evaluated.

var num = 6;

console.log(null + 5);
// 5
console.log(5 * undefined);
// NaN
console.log(5 / true);
// 5
console.log("5" * "3.5");
// 17.5
console.log("dog" - "cat");
//NaN

// When at least one of the inputs is a String, the output will be a String. (+)
console.log(num += "a string");
// "6a string"
console.log("5" + null);
// "5null"
console.log(1 + "5");
// 15

console.log("5.4" > 3);
// true
console.log(3 == "dog");
// false
