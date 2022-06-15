var animal = ["ape", "bee", "cat"];
var fruit = ["apple", "banana", "cherry", "banana"];

.concat(arrayOne, arrayTwo);
// returns a new array formed by concatenating arrayOne + arrayTwo to thw array.
// multiple data types, and arrays can be used.
animal.concat(fruit, 2, "Hello");
// Array ["ape", "bee", "cat", "apple", "banana", "cherry", "banana", 2, "Hello"]

.toString()
// returns a String formed by concatenating all the items.
// using "," between each consective pair.
animal.toString();
// "ape,bee,cat"

.join(joiner)
// returns a String formed by concatenating all the items,
// using "joiner" between each consective pair.
fruit.join(" and ");
// "apple and banana and cherry and banana"

.indexOf(item)
// returns the index of the leftmost occurrence of the item.
animals.indexOf("cat");
// 2

.lastIndexOf(item)
// returns the index of the rightmost occurrence of the item.
fruit.lastIndexOf("banana");
// 3

.slice(start, end)
// returns a new array formed including elements with index "start" up through "end - 1".
animal.slice(0, 2);
// Array ["ape", "bee"]

.slice(start)
// returns a new array formed including elements with index "start" up through the end.
fruit.slice(2);
// Array ["cherry", "banana"]

.pop()
// removes the last item from the array and returns it.
animal.pop();
// "cat"

.push(itemOne, itemTwo)
// adds the items to the end of the array and returns the new array length.
fruit.push("don't", "eat", "fruit");
// 7

.shift()
// removes the first item from the array and returns it.
animal.shift();
// "ape"

.unshift(item)
// adds item to the beginning of the array and returns the array length
fruit.unshift("Hello");
// Array ["Hello", "apple", "banana", "cherry", "banana", "don't", "eat", "fruit"];

var mixed = ["one", 2, "three", 4, "five"];

.splice(i, num, itemOne, itemTwo)
// splices in the items to add at index "i" while removing "num" items.
// returns an array of the items removed.
mixed.splice(2, 2, 3, "four");
// Array ["three", "four"]
console.log(mixed);
// Array ["one", 2, 3, "four", 5]

.reverse()
// reverses the order of the items and returns the modified array.
mixed.reverse()
// Array [5, "four", 3, 2, "one"]

.sort()
// sorts the items in alphabetical order and returns the modified array.
mixed.sort();
// Array [2, 3, 5, "four", "one"]
