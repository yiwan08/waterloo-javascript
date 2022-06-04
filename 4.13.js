// Deleting objects

paragraph.removeChild(oldChild);
// removes the child "oldChild" of "parent".

var parent = element.parentNode;
parent.removeChild(element);
// this is a safer way.

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Example using DOM methods to delete nodes</title>
  </head>
  <body>
    <ol>
      <li>This is item 1.</li>
      <li>This is item 2.</li>
      <li id="three">This is item 3.</li>
      <li>This is item 4.</li>
    </ol>
    <script>
      var nodeThree= document.getElementById("three");
      var theParent = nodeThree.parentNode;
      theParent.removeChild(nodeThree);
    </script>
  </body>
</html>
