// Array and Array-like objects
// Used extensively in JavaScript in manipulating the DOM.

// Store a sequence of numbers, strings, other types of data.
// Individual value in a sequence is an "item" or "element".
// Can be accessed by its "index" or "position".

// Mutable (able to add or delete).
// Mutation can lead to aliasing, which 2 different names are used for the same data.

// "Typeof" array is object.

// Creating a new array
var myArray = [item1, item2, item3];

// Accessing and changing elements.
myArray[1] = newItem;

var myArray = ["a", "b", "c"];
myArray[12] = ["d"];
// the length of myArray is now 13.

// Forming an array of strings
myArray = "a-b-c".split("-");
// myArray now contains ["a", "b", "c"]

// Example of Arrays

var animals = ["ape", "bee", "cat", "dog", "eel"];
var vegetables = [];
var aSentence = "This is a sentence.";

animals[2] = "hippo";
animals[7] = "fox";
vegetables[5] = "artichoke";

console.log("The updated array animals is " + animals);
// [ape, bee, hippo, dog, eel, undefined, undefined, fox]
console.log("The updated array vegetables is " + vegetables);
// [undefined, undefined, undefined, undefined, undefined, artichoke]
console.log("The length of vegetables is " + vegetables.length);
// 6
console.log("Using split gives " + aSentence.split(" "));
// ["This", "is", "a", "sentence."]

// Example of Using an array
// If password is not entered, one of four possible responses is chosen at random.
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Example using a form and branching</title>
    <script>
      window.onload = startFunction;

      function startFunction() {
          var button = document.getElementById("enterbutton");
          button.addEventListener("click", function() {
              var entered = document.getElementById("password").value;
              var answer = document.getElementById("answer");
              var response = ["Too bad.", "Try again.", "Not quite.", "No good."];
              if (entered == "password") {
                  answer.textContent = "secret key";
              } else {
                  item = Math.floor(Math.random() * 4);
                  answer.textContent = response[item];
              }
          });
      }
    </script>
  </head>
  <body>
    <form>
      <fieldset>
        <legend>Type password to see the secret key</legend>
        <label for="password">
          Type here:
        </label>
        <input id="password" type="text">
      </fieldset>
      <p><input id="enterbutton" type="button" value="Enter typed value"></p>
      <p id="answer"></p>
    </form>
  </body>
</html>
