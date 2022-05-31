// Booleans

// Almost all values are true.
// Except: false, "false", "", 0, -0, null, undefined, NaN.

// Boolean()

console.log(Boolean(NaN));
// false

console.log(Boolean(200));
// true

// != && ==
// JavaScript convert the types of the values.
console.log(1 == "1");
// true

// !== & ===
// Same type is required.
console.log(1 === "1");
// false

console.log("a string" < "another string");
// true --> compare string length.

console.log("a" < "A");
// true --> Unicode decides upper-case come before lower-case.
