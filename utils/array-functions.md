
# Array Functions

| Function | Description | Example |
| -------- | ----------- | ------- |
| `forEach` | Executes a provided function for each element in the array. |
const numbers = [1, 2, 3];
numbers.forEach(number => console.log(number));
 |
| `map` | Creates a new array by applying a function to each element in the original array. |
const numbers = [1, 2, 3];
const doubled = numbers.map(number => number * 2);
 |
| `filter` | Creates a new array containing elements that satisfy a given condition. |
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(number => number % 2 === 0);
 |
| `reduce` | Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. |
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, number) => acc + number, 0);
 |
| `find` | Returns the first element in the array that satisfies a given condition, or `undefined` if none is found. |
const numbers = [1, 2, 3, 4];
const firstEven = numbers.find(number => number % 2 === 0);
 |
| `indexOf` | Returns the first index at which a given element can be found in the array, or -1 if it is not present. |
const numbers = [1, 2, 3, 4];
const index = numbers.indexOf(3);
 |
| `lastIndexOf` | Returns the last index at which a given element can be found in the array, or -1 if it is not present. |
const numbers = [1, 2, 3, 4, 3];
const lastIndex = numbers.lastIndexOf(3);
 |
| `some` | Tests whether at least one element in the array satisfies a given condition. |
const numbers = [1, 2, 3, 4];
const hasEven = numbers.some(number => number % 2 === 0);
 |
| `every` | Tests whether all elements in the array satisfy a given condition. |
const numbers = [2, 4, 6, 8];
const allEven = numbers.every(number => number % 2 === 0);
 |
| `concat` | Merges two or more arrays, returning a new array. |
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = arr1.concat(arr2);
 |
| `slice` | Returns a shallow copy of a portion of the array as a new array. |
const numbers = [1, 2, 3, 4, 5];
const subArray = numbers.slice(1, 4);
 |
| `splice` | Adds/removes elements from an array, returning the removed elements. |
const numbers = [1, 2, 3, 4, 5];
const removed = numbers.splice(1, 2, 'two', 'three');
 |
| `push` | Adds one or more elements to the end of an array, and returns the new length. |
const numbers = [1, 2, 3];
const newLength = numbers.push(4, 5);
 |
| `pop` | Removes the last element from an array and returns it. |
const numbers = [1, 2, 3];
const removedElement = numbers.pop();
 |
| `shift` | Removes the first element from an array and returns it. |
const numbers = [1, 2, 3];
const removedElement = numbers.shift();
 |
| `unshift` | Adds one or more elements to the beginning of an array, and returns the new length. |
const numbers = [1, 2, 3];
const newLength = numbers.unshift(0);
 |
| `reverse` | Reverses the order of the elements in an array, in place. |
const numbers = [1, 2, 3];
const reversed = numbers.reverse();
 |
| `sort` | Sorts the elements of an array, in place. |
const numbers = [3, 1, 2];
const sorted = numbers.sort();
 |
| `join` | Joins all elements of an array into a string, using a specified separator. |
const words = ['hello', 'world'];
const sentence = words.join(' ');
 |
| `includes` | Determines whether an array includes a certain element. |
const numbers = [1, 2, 3, 4, 5];
const hasThree = numbers.includes(3);
 |
| `fill` | Fills all the elements of an array with a static value, from a start index to an end index. |
const numbers = [1, 2, 3, 4, 5];
const filled = numbers.fill(0, 1, 4);
 |
| `copyWithin` | Shallow copies part of an array to another location in the same array, without modifying its size. |
const numbers = [1, 2, 3, 4, 5];
const copied = numbers.copyWithin(0, 3, 5);
 |
| `entries` | Returns a new Array Iterator object that contains key-value pairs for each index in the array. |
const numbers = [1, 2, 3];
const iterator = numbers.entries();
 |
| `keys` | Returns a new Array Iterator object that contains the keys for each index in the array. |
const numbers = [1, 2, 3];
const iterator = numbers.keys();
 |
| `values` | Returns a new Array Iterator object that contains the values for each index in the array. |
const numbers = [1, 2, 3];
const iterator = numbers.values();
 |
| `flat` | Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. |
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flattened = nestedArray.flat();
 |
| `flatMap` | Returns a new array formed by applying a given mapping function to each element of the array, and then flattening the result by one level. |
const nestedArray = [1, 2, 3];
const flatMapped = nestedArray.flatMap(num => [num, num * 2]);
 |
| `from` | Creates a new, shallow-copied Array instance from an array-like or iterable object. |
const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
const array = Array.from(arrayLike);
 |
| `of` | Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments. |
const array = Array.of(1, 2, 3);
 |
| `isArray` | Determines whether the passed value is an Array. |
const array = [1, 2, 3];
const isArray = Array.isArray(array);
 |
| `toString` | Returns a string representing the specified array and its elements. |
const array = [1, 2, 3];
const string = array.toString();
 |
| `toLocaleString` | Returns a localized string representing the specified array and its elements. |
const array = [1, 2, 3];
const string = array.toLocaleString();
 |
| `findIndex` | Returns the index of the first element in the array where predicate is true, and -1 otherwise. |
const array = [1, 2, 3];
const foundIndex = array.findIndex(num => num > 1);
 |
