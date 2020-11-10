# LeetCode #292 Nim Game

唯有剩四顆石頭的時候，我沒辦法贏。

Runtime: 56 ms
Memory Usage: 32.9 MB

```javascript
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  return n % 4 !== 0;
};

var input = 4;
console.log(canWinNim(input));
```
