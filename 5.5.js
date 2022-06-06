// Events
// Events are inputs from the user.
// Movement of the cursor or click of the mouse.

onload
// a page or image is loaded.

onclick
// a link or form control is clicked.

onmouseover
// the cursor moves over an element.

onmouseout
// the cursor moves away from an element.

onkeydown
// a key is pressed.

<button onclick="console.log('Clicked')">Click here</button>
// Can be included as the value of an event attribute.
// Clicking on the button result in "Clicked" being written to the console.

// Example

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <button onclick="document.getElementById('answerhere').textContent
      ='Replacement text.'">Click to replace the text</button>
    // Replace "Text to replace." to "Replacement text."
    <p id="answerhere">Text to replace.</p>
  </body>
</html>

// Example

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Example using functions events</title>
    <script>
      function addParagraph() {
          document.getElementById('answerhere').textContent = 'Text added';
      }

      function changeColour() {
          document.getElementById('changehere').style.color = "red";
      }

      function changeBack() {
          document.getElementById('changehere').style.color = "black";
      }
    </script>
  </head>
  <body>
    <button onclick="addParagraph()">Click to add to the paragraph </button>
    <p id="answerhere"></p>
    <p id="changehere" onmouseover="changeColour()" onmouseout="changeBack()">Mouse over this paragraph to see the colour change.</p>
  </body>
</html>
