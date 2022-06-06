// Variable "this"
// "this" property has the value of the object that called the function.

<button onclick="this.textContent='Request granted'">Click to change the button</button>
// "this" is the button object, since the single-line script is the value of the button's onclick attribute.

<p id="changhere" onmouseover="this.style.color='red'" onmouseout="this.style.color='black'">
  Mouse over this paragraph to see the colour change.
</p>
// "this" is the paragraph, since the scripts are the values of the paragraph's onmouseover and onmouseout attributes.

// Window load event

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Example using a window load event</title>
    <script>
      window.onload = startFunction;
      // Assigning function "startFuncion" as the event "onload".
      function startFunction() {
          document.getElementById('replacehere').textContent
            = 'Replacement text.';
      }
    </script>
  </head>
  <body>
    <p id="replacehere">Original text.</p>
  </body>
</html>
