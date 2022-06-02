// The Document Object Model (DOM)
// An object-oriented representation of a web page, based on a tree representation of the HTML document
// Each node in the tree represents information about the document.
// And the way nodes are connected to each other by edges.

// "Head element" and "Body element" are placed inside the "html element".
// Head and body are the children of the html.

// Each node of the tree is an object in the DOM.
// There are properties and methods to each nodes.

// DOM Objects
// Document node; the whole document.
// Element node; one for each element in the HTML document.
// Text node; the text inside an element.
// Attribute node; one for each attribute of an element.
// Comment node; one for each comment.

// nodeType(tag name in upper case, null), nodeName(attribute name, attribute value), nodeValue(the string "#text", text content)
var specialNode = document.getElementById("special");
console.log(specialNode.nodeType);
console.log(specialNode.nodeName);
console.log(specialNode.nodeValue);
