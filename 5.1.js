// Creating functions
// There are 2 parts of a function.

// Header: name and parameters' names (maybe data type).
// Body: the code that will execute when the function is called.

// Call by value: value of the input, not the input itself.
// Call by reference: the input itself can be changed (mutable types).

// Example:

function myFunction (parameter1, parameter2) {
  statement1;
  statement2;
}

// Local variable inside a function, use "var".
// Omitting var often results in the creation of a global variable instead.

// Example:

function test(parameter1, parameter2) {
  return (parameter1 + parameter2);
}

test(5, 6);

// function test(parameter1, parameter2) --> definition.
// 5, 6 --> arguments.
// parameter1, parameter2 --> parameters.
