// Object
// An object is a way of grouping information to form a data type.
// Properties - Attributes (values associated with the objects) and
// Methods (functions associated with the objects).

// Object        Information              Example methods
|------------------------------------------------------------------------|
| Date         | Date and time          | Extract or set the month       |
|------------------------------------------------------------------------|
| Math         | Mathematical functions | Determine the floor of a value |
|------------------------------------------------------------------------|
| Canvas       | Drawings of pictures   | Draw lines and shapes          |
|------------------------------------------------------------------------|
| Document     | Components of the      | Extract and modify parts       |
| Object Model | web page               |                                |
|------------------------------------------------------------------------|
| Regular      | Text patterns          | Match and modify matched text  |
| expressions  |                        |                                |
|------------------------------------------------------------------------|

// Access object's property
var aString = "A name";
var num = 53;

console.log(aString.length);
// 6
console.log(aString["length"]);
// 6
console.log(aString["le" + "ngth"]);
// 6

console.log(aString.valueOf());
// "A name"
console.log(num.valueOf());
// 53

console.log(num.toString());
// "53"
