# String Functions

| Function | Description | Example |
| -------- | ----------- | ------- |
| `charAt` | Returns the character at the specified index. |
const str = 'hello';
console.log(str.charAt(1)); // 'e' |
| `charCodeAt` | Returns the Unicode value of the character at the specified index. |
const str = 'hello';
console.log(str.charCodeAt(1)); // 101
|
| `concat` | Concatenates the string arguments to the calling string and returns a new string. |
const str1 = 'hello';
const str2 = 'world';
console.log(str1.concat(' ', str2)); // 'hello world'
|
| `endsWith` | Determines whether a string ends with the characters of a specified string. |
const str = 'hello world';
console.log(str.endsWith('world')); // true
|
| `includes` | Determines whether one string may be found within another string. |
const str = 'hello world';
console.log(str.includes('world')); // true
|
| `indexOf` | Returns the index within the calling string of the first occurrence of the specified value, or `-1` if not found. |
const str = 'hello world';
console.log(str.indexOf('world')); // 6
|
| `lastIndexOf` | Returns the index within the calling string of the last occurrence of the specified value, or `-1` if not found. |
const str = 'hello world, world';
console.log(str.lastIndexOf('world')); // 13
|
| `match` | Retrieves the result of matching a string against a regular expression. |
const str = 'hello world';
const regex = /world/;
console.log(str.match(regex)); // ['world', index: 6, input: 'hello world', groups: undefined]
|
| `repeat` | Constructs and returns a new string which contains the specified number of copies of the string on which it was called. |
const str = 'hello';
console.log(str.repeat(3)); // 'hellohellohello'
|
| `replace` | Returns a new string with some or all matches of a pattern replaced by a replacement. |
const str = 'hello world';
console.log(str.replace('world', 'there')); // 'hello there'
|
| `search` | Executes a search for a match between a regular expression and this string object. |
const str = 'hello world';
const regex = /world/;
console.log(str.search(regex)); // 6
|
| `slice` | Extracts a section of the string and returns it as a new string. |
const str = 'hello world';
console.log(str.slice(0, 5)); // 'hello'
|
| `split` | Splits a string into an array of substrings. |
const str = 'hello world';
console.log(str.split(' ')); // ['hello', 'world']
|
| `startsWith` | Determines whether a string begins with the characters of a specified string. |
const str = 'hello world';
console.log(str.startsWith('hello')); // true
|
| `substr` | Returns a portion of the string, starting at the specified index and extending for a given number of characters afterward. |
const str = 'hello world';
console.log(str.substr(0, 5)); // 'hello'
|
| `substring` | Returns a portion of the string between the specified indices. |
const str = 'hello world';
console.log(str.substring(0, 5)); // 'hello' |
| `toLowerCase` | Returns the calling string value converted to lowercase. |
const str = 'Hello World';
console.log(str.toLowerCase()); // 'hello world' |
| `toUpperCase` | Returns the calling string value converted to uppercase. | 
const str = 'Hello World';
console.log(str.toUpperCase()); // 'HELLO WORLD'
 |
| `trim` | Trims whitespace from the beginning and end of the string. | 
const str = '  hello world  ';
console.log(str.trim()); // 'hello world'
 |
| `trimStart` or `trimLeft` | Trims whitespace from the beginning of the string. |
const str = '  hello world  ';
console.log(str.trimStart()); // 'hello world  '
 |
| `trimEnd` or `trimRight` | Trims whitespace from the end of the string. | 
const str = '  hello world  ';
console.log(str.trimEnd()); // '  hello world'
 |
| `padStart` | Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. Padding is applied from the start of the current string. | 
const str = 'hello';
console.log(str.padStart(10, 'x')); // 'xxxxxhello'
 |
| `padEnd` | Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. Padding is applied to the end of the current string. | 
const str = 'hello';
console.log(str.padEnd(10, 'x')); // 'helloxxxxx'
 |
| `startsWith` | Determines whether a string begins with the characters of a specified string. 
const str = 'hello world';  
console.log(str.startsWith('hel')); // true
| `endsWith` | Determines whether a string ends with the characters of a specified string. | 
const str = 'hello world';
console.log(str.endsWith('rld')); // true
 |
| `includes` | Determines whether one string may be found within another string. | 
const str = 'hello world';
console.log(str.includes('wor')); // true
 |
| `repeat` | Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together. | 
const str = 'abc';
console.log(str.repeat(3)); // 'abcabcabc'
 |
| `normalize` | Returns the Unicode Normalization Form of the calling string value. | 
const str = 'ä';
console.log(str.normalize('NFD')); // 'ä'
 |
| `codePointAt` | Returns a non-negative integer that is the Unicode code point value. | 
const str = 'hello world';
console.log(str.codePointAt(1)); // 101
 |
| `match` | Retrieves the result of matching a string against a regular expression. | 
const str = 'hello world';
const regex = /\w+/g;
console.log(str.match(regex)); // ['hello', 'world']
 |
| `matchAll` | Returns an iterator of all results matching a string against a regular expression, including capturing groups. | 
const str = 'hello world';
const regex = /(\w+)\s(\w+)/;
for (const match of str.matchAll(regex)) {
  console.log(match);
}
 |
| `search` | Executes a search for a match between a regular expression and this String object. | 
const str = 'hello world';
const regex = /\w+/g;
console.log(str.search(regex)); // 0
 |
| `replace` | Returns a new string with some or all matches of a pattern replaced by a replacement. | 
const str = 'hello world';
const regex = /world/;
console.log(str.replace(regex, 'friend')); // 'hello friend'
 |
| `replaceAll` | Returns a new string with all matches of a pattern replaced by a replacement. | 
const str = 'hello world world';
const regex = /world/g;
console.log(str.replaceAll(regex, 'friend')); // 'hello friend friend'
 |

