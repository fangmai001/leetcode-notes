# LeetCode #9 Palindrome Number

## 簡單做

反轉後，數字沒有改變。

Runtime: 204 ms
Memory Usage: 47.1 MB

```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let a = x.toString();
  let b = x.toString().split("").reverse().join("");
  return a === b;
};
```
