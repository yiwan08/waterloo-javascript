// Branching using switch statment
// JavaScrtip has a "switch" statement that allows branching to occur based on the value of an expression.
// Each "case" specifies a possible value of the expression, followed by statements to be executed.
// Followed by "break".

// Example: if the expression evaluates to a number, the values are numbers.
// The optional "default" case, is taken if none of the other cases apply.

switch(expression) {
  case value1:
    statement1;
    break;
  case value2:
    statment2;
    break;
  default:
    statment3;
    break;
}

// Example

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Example using switch</title>
    <script>
      window.onload = startFunction;

      function startFunction() {
          var button = document.getElementById("enterbutton");
          button.addEventListener("click", function() {
              var entered = document.getElementById("password").value;
              var answer = document.getElementById("answer");
              switch(entered) {
                  case "1":
                      answer.innerHTML = "You typed 1.";
                      // answer.textContent = "You typed 1."; also works.
                      break;
                  case "2":
                      answer.innerHTML = "You typed 2.";
                      break;
                  case "3":
                      answer.innerHTML = "You typed 3.";
                      break;
                  default:
                      answer.innerHTML = "You did not do as I asked!";
                      break;
             }
          });
      }
    </script>
  </head>
  <body>
    <form>
      <fieldset>
        <legend>Type an integer from 1 to 4 to see a message.</legend>
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
