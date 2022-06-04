// **Create new objects:

document.createElement("tagname");
// creates an element node with the specified tag name.

document.createTextNode("new text");
// creates a text node with the specified text content.

// **Insert objects into the tree:

paragraph.appendChild(item);
// adds "item" as the last child of "parent".

paragraph.insertBefore(item, previousChild);
// inserts "item" before the child "previousChild" of "parent".

paragraph.replaceChild(item, oldChild);
// replaces the child "oldChild" of "parent" with "item".

// Example:

var newPara = document.createElement("p");
var newText = document.createTextNode("This is a new paragraph");

// adds a new paragraph with content "This is a new paragraph".
newPara.appendChild(nextText);
document.body.appendChild(newPara);
// Adding a child to newPara takes place before adding a child to the body element,
// since the body element is closer to the root.
// Best practice to do in down-to-top order.

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Example using DOM methods to add nodes</title>
  </head>
  <body>
    <script>
      var bodyNode = document.body;
      var listNode = document.createElement("ol");

      var itemOneNode = document.createElement("li");
      var itemTwoNode = document.createElement("li");

      var textOneNode = document.createTextNode("Item 1.");
      var textTwoNode = document.createTextNode("Item 2.");

      itemOneNode.appendChild(textOneNode);
      itemTwoNode.appendChild(textTwoNode);

      listNode.appendChild(itemOneNode);
      listNode.appendChild(itemTwoNode);

      bodyNode.appendChild(listNode);
    </script>
  </body>
</html>
