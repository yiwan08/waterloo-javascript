// While

// while loop check condition first, then execute.
while (condition) {
  statement1;
  statement2;
}

// do/while loop execute at least one time first, then check conditon.
do {
  statement1;
  statement2;
} while (condition);

// For
  
for (counter = 0; counter < 5; counter++) {
  statement1;
  statement2;
}

// "break" statement in a for loop provides an exit out of all iterations.
// "continue" statement provides an exit out of the current iteration only.

// EXAMPLE: while and do/while
// They output the same thing in this case.

var myString = "abcdefghi";

counter = 0;
while (counter < myString.length) {
    console.log(myString[counter]);
    counter++;
} 

counter = 0;
do {
    console.log(myString[counter]);
    counter++;
} while (counter < myString.length);

// EXAMPLE: for

var myString = "This is the string we have.";
var newString = "";
var reverseString = "";
var shortString = "";
var skipString = "";
var counter;

for (counter = 0; counter < myString.length; counter = counter + 5) {
    newString = newString + myString[counter];
}
console.log(newString);
// "Tieiee"

for (counter = myString.length - 1; counter >= 0; counter--) {
    reverseString = reverseString + myString[counter];
}
console.log(reverseString);
// ".evah ew gnirts eht si sihT"

for (counter = 0; counter < myString.length; counter++) {
    if (myString[counter] == "e") {
       break;
    } else {
        shortString = shortString + myString[counter];
    }
}
console.log(shortString);
// "This is th"

for (counter = 0; counter < myString.length; counter++) {
    if (myString[counter] == " ") {
        continue;
    } else {
        skipString = skipString + myString[counter];
    }
}
console.log(skipString);
// "Thisisthestringwehave."
