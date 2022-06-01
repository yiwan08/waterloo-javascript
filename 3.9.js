// Canvas

<canvas id="myDrawing" width="500" height="300"></canvas>
// canvas element in HTML document to use Canvas.
// "id" is used to reference JavaScript.
// "width" and "height" are not a reference for CSS.

var myDrawing = document.getElementById("myDrawing");
// Sets variable myDrawing to access canvas element in HTML document.
var context = myCanvas.getContext("2d");
// Retrieved the object 2d context.

// Properties of the object

context.lineWidth = 20;
// the number of pixels wide a line should be.
context.strokeStyle = "blue";
// a string giving the colour of a line.
context.lineCap = "round";
// a string indicating how the ends of the line can be shaped.
context.fillStyle = "red";
// a string giving the colour of a closed path.
context.font = "20 px Times";
// the size and name of the font.

// Placing "pen"

context.lineWidth = 20;
context.strokeStyle = "green";
context.moveTo(0, 0);
context.lineTo(10, 20);
context.stroke();
// Draw a green line from (0, 0) to (10, 20).
