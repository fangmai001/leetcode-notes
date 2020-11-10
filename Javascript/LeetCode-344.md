# LeetCode #344 Reverse String

Runtime: 100 ms
Memory Usage: 42.3 MB

```javascript
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  s.reverse();
  return s;
};

var input = ["h", "e", "l", "l", "o"];
console.log(reverseString(input));
```
