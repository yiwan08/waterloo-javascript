// Event listeners
// Another way of adding event.
element.addEventListener(event, function);

// Event type + executed function.
// Event type is formed by removing the word "on" from attribute name.

thisButton.addEventListener("click", function() {
  this.textContent = "Changes";
});
// Event listeners work very well with ananymous functions.

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Example using event listeners</title>
    <script src="eventlistener.js">
      window.onload = startFunction;
      function startFunction() {
          var thisButton = document.getElementById("thisbutton");
          var thatButton = document.getElementById("thatbutton");

          thisButton.addEventListener("click", function() {
              this.textContent = "Changed";
          });

          thatButton.addEventListener("click", function() {
              document.getElementById('answerhere').textContent = 'Text added';
          });
      }
     </script>
  </head>
  <body>
    <button id="thisbutton">Click to change the button</button>
    <button id="thatbutton">Click to add to the paragraph</button>
    <p id="answerhere"></p>
  </body>
</html>
