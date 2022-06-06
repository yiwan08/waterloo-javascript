// Example 2

/*
create a function that consumes two date objects for the same day and produces the number of minutes between the two objects.
*/

var noon = new Date(1900, 12, 12, 12, 0);
var dinner = new Date(1900, 12, 12, 18, 30);

// function
function elapsed (timeOne, timeTwo) {
  var HOURMINS = 60;
  hoursOne = timeOne.getHours();
  minutesOne = timeOne.getMinutes();
  hoursTwo = timeTwo.getHours();
  minutesTwo = timeTwo.getMinutes();
  
  waitHours = (hourL - hourC) * HOURMINS;
  waitMins = minutesL - minutesC;

  return waitHours + waitMins;
}

// output
console.log(elapsed(noon, dinner));
