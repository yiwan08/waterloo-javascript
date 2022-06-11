// Branching
// A program contains branching when there are multiple possible courses of action.
// Boolean conditions are used to determined which course of actions should be taken.
// When the branching ends, the courses of action rejoin.

// Iteration
// When a program repeats a sequence of steps, perhaps on different data, the program is said to use iteration.
// While loops & For loops.

// Example:

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Example using if</title>
    <script>
      window.onload = startFunction;
      function startFunction() {
          var button = document.getElementById("enterbutton");

          button.addEventListener("click", function() {
              var entered = document.getElementById("password").value;
              var answer = document.getElementById("answer");
              if (entered == "password") {
                  answer.textContent = "secret key";
              } else {
                answer.textContent = "Too bad.";
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
