// Changing types of data

Number() // produce number.
String() // produce string.
Boolean() // produce boolean.

console.log(Number("5"));
// 5
console.log(Number(true));
// 1

console.log(String(5));
// "5"
console.log(String(false));
// "false"

// We can force a variable to be a number by:
var str = "hello";
str *= 1;
console.log(str);
// NaN

var int = 5;
int += "";
console.log(int);
// "5"
