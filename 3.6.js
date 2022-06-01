// Date object
// Date is an object.

new Date()
// To create a new date object with the current date and time.

.getFullYear()
.getMonth()
.getDate()
.getHours()
.getMinutes()
.getSeconds()

// Months are numbered from 0 - 11.
// Dats are numbered from 1.

.toDateString()
// Give a more readable format.

var current = new Date();
// Current date
var anotherDate = new Date(1834, 11, 22);

console.log(typeof(current));
// "object"
console.log(anotherDate.toDateString());
// "Mon Dec 22 1834"
console.log(anotherDate.getMonth());
// 11
current.setYear(1999);
// Reset current's year to 1999
console.log(current.toDateString());
// CURRENT DATE but in year 1999
// "Tue Jun 01 1999"

/*
Write a script that writes to the console the number of minutes between the current time and midnight.
*/

var current = new Date();

var hours = 23 - current.getHours();
var minutes = 60 - current.getMinutes();

var total = hours * 60 + minutes;
console.log(total);
