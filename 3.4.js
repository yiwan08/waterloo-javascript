// Strings as Objects
// String itself is not changed.

var myString = "This is my string.";

console.log(myString.slice(0, 4));
// "This"
console.log(myString.slice(-4, -1));
// "ing"
console.log(myString.slice(-4));
// "ing."
console.log(myString.slice(-1));
// "."

console.log(myString.indexOf("his"));
// 1
console.log(myString.indexOf("hers"));
// -1 (does not exist)

console.log(myString.charAt(9));
// "y"
console.log(myString.charAt(100));
// ""

console.log(myString.toUpperCase());
// "THIS IS MY STRING."
console.log(myString.replace(" is "," isn't "));
// "This isn't my string."
console.log(myString.replace("i","*"));
// "Th*s is my string."

console.log(myString);
// "This is my string."
