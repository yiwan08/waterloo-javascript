// Creating classes

function ClassName(propOne, propTwo) {
  this.propOne = propOne;
  this.propTwo = propTwo;
  
  this.someMethod = function(someValue) {
    this.propOne = someValue;
  }
}

var newObject = new ClassName(valueOne, valueTwo);
// OR
var newObject = new ClassName();
newObject.propOne = valOne;
newObject.propTwo = valTwo;

// Calling
newObject.someMethod(someValue);

// EXAMPLE

function Circle(x, y, radius, colour) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.colour = colour;

    this.printValues = function() {
	    return "A " + this.colour + " circle of radius " + this.radius + " centred at (" + this.x + "," + this.y + ").";
    };

    this.area = function() {
	    return Math.pow(this.radius, 2) * Math.PI;
    };

    this.increase = function(factor) {
	    this.radius = this.radius * factor;
    };
}

var smallCircle = new Circle(100, 200, 50, "red");
var bigCircle = new Circle();
bigCircle.x = 200;
bigCircle.y = 200;
bigCircle.radius = 100;
bigCircle.colour = "blue";

console.log(bigCircle.printValues());
// "A blue circle of radius 100 centred at (200, 200)."
console.log(smallCircle.printValues());
// "A red circle of radius 50 centred at (100, 200)."
console.log(smallCircle.area());
// 7853.981633974483
smallCircle.increase(5);
console.log(smallCircle.printValues());
// "A red circle of radius 250 centred at (100, 200)."
