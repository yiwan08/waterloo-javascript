// Rearranging objects

paragraph.insertBefore(item, previousChild);
// inserts "item" before the child "previousChild" of "parent".

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Example using DOM methods to rearrange nodes</title>
  </head>
  <body>
    <ol id="ordered">
      <li id="one">This is item 1.</li>
      <li id="two">This is item 2.</li>
      <li id="three">This is item 3.</li>
      <li id="four">This is item 4.</li>
    </ol>
    <ul id="unordered">
      <li id="first">First item</li>
      <li id="second">Second item</li>
    </ul>
    <ul>
      <li id="new">New item.</li>
      <li id="newer">Newer item.</li>
    </ul>
    <script>
      var nodeOrdered = document.getElementById("ordered");
      var nodeOne = document.getElementById("one");
      var nodeTwo = document.getElementById("two");
      var nodeThree= document.getElementById("three");
      var nodeFour = document.getElementById("four");

      var nodeUnordered = document.getElementById("unordered");
      var nodeFirst = document.getElementById("first");
      var nodeSecond= document.getElementById("second");

      var nodeNew = document.getElementById("new");
      var nodeNewer = document.getElementById("newer");

      nodeOrdered.insertBefore(nodeFour, nodeOne);
      nodeOrdered.insertBefore(nodeThree, nodeTwo);

      nodeUnordered.appendChild(nodeNew);
      nodeUnordered.replaceChild(nodeNewer, nodeFirst);
</script>
  </body>
</html>
