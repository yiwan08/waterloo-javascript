// Making changes to object
// Possible to change objects by assigning new values for various properties.

item.textContent = "New Text";
// Replaces all children of the node item with a single text node.

item.innerHTML = "New Text";
// Replaces all children of the node item with a single text node.

item.textContent = "Next Text";

// Changing style

item.style.fontSize = "2em";
// ↑↓ these two are the same thing.
item.setAttribute("style", "fontSize: 2em");

// Example

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Example using changes in attributes</title>
    <style>
      .strange {
        color: orange;
        font-style: italic;
        font-size: 2em;
        text-decoration: underline;
      }
    </style>
  </head>
  <body>
    <p id="redlarge">This is red and large.</p>
    <p id="blue">This is blue.</p>
    <p id="changeclass">This will have its class changed.</p>
    <div id="division">
      <p id="lost">Sadly, this paragraph will be lost.</p>
      <p>This too will be lost.</p>
      <p>And also this one.</p>
    </div>
    <script>
      var redLargeNode = document.getElementById("redlarge");
      var blueNode = document.getElementById("blue");
      var changeClassNode = document.getElementById("changeclass");
      var lostNode = document.getElementById("lost");

      // changing redlarge style to "2em".
      redLargeNode.style.fontSize = "2em";

      // changing blue style to "blue".
      blueNode.setAttribute("style", "color: blue");

      // changing changeclass style to css class "strange"
      changeClassNode.setAttribute("class", "strange");
      newclass = changeClassNode.getAttribute("class");

      /* Beware overuse of innerHTML! */
      console.log(lostNode.nodeType);
      // 1
      console.log(newclass);
      // "strange"    
      document.getElementById("division").innerHTML = "New innerHTML for a division.";
      // replacing the entire "division" node to new text.

      var lostNode = document.getElementById("lost");
      console.log(lostNode.nodeType);
      // becasue paragraph "lost" belongs to div "division" and we replaced it with next text.
      // therefore, this will prints out nothing.
    </script>
  </body>
</html>
