// Creating objects

var myCircle = {
  x: 50,
  y: 50,
  radius: 50,
  colour: "red"
}

myCircle['radius']
// OR
myCircle.radius
// To acess or modify object's property.

myCircle.name = "nose";
// Changes myCircle name to nose.
delete myCircle.colour;
// Deletes myCircle colour property.

// EXAMPLE

var newCircle;
var prop;
var myCircle = {
    x:100,
    y:200,
    radius: 50,
    colour: "red"
};

newCircle = myCircle;

for (var prop in myCircle) {
    console.log(myCircle[prop]);
}
// 100, 200, 50 --> prints out all property of object.

myCircle.radius = 100;
console.log(myCircle.radius);
// 100

delete myCircle.radius;
console.log(myCircle.radius);
// undefined

console.log(myCircle.feature);
// undefined

myCircle.feature = "nose";
console.log(myCircle.feature);
// Assigns "nose" to feature property --> "nose"

console.log(newCircle.feature);
// Due to aliasing, changes made to myCircle also been made to newCircle.
console.log(myCircle == newCircle);
// true

console.log(myCircle);
// Object {x: 100, y: 200, radius: 50, colour: "red", feature: "nose"}
