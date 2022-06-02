// Extracting information about objects

// Property innerHTML
// Contains the entire HTML content of an element.
<body>
  <p>One</p>
  <o>Two</p>
</body>

document.body.innerHTML
// All the text of the body element (including tags and line breaks).

// Property textContent
document.body.textContent
// Same thing as above, but will not include tag names.

// Property style
// Gives style of a node, can be specified by using dot notation second time.
itme.style.fontSize;
// CSS: font-size, JavaScript: fontSize

// Methods .getAttribute(attribute
// Can be used to determined the value of a particular attribute.
// Such as style, class, or id.

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Example using DOM to extract information</title>
  </head>
  <body>
    <p style="color:red; font-size:2em" id="redlarge">This is red and large.</p>
    <p class="regular" id="normal">This is regular and normal.</p>
    <div id="division">
      <p>One paragraph.</p>
      <p>Another paragraph.</p>
    </div>
    <script src="extract.js">
      var redLargeNode = document.getElementById("redlarge");
      var normalNode = document.getElementById("normal");
      var divisionNode = document.getElementById("division");

      console.log(redLargeNode.style.color);
      // "red"
      console.log(redLargeNode.style.fontSize);
      // "2em"
      console.log(normalNode.getAttribute("class"));
      // "regular"

      console.log(normalNode.textContent);
      // "This is regular and normal."
      console.log(normalNode.innerHTML);
      // "This is regular and normal."

      console.log(divisionNode.textContent);
      // "One paragraph.
      // Another paragraph."
      console.log(divisionNode.innerHTML);
      // "<p>One paragraph.</p>
      // <p>Another paragraph.</p>"
    </script>
  </body>
</html>
