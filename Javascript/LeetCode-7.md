# LeetCode #7 Reverse Integer

## 第一次做

Runtime: 84 ms
Memory Usage: 37.6 MB

```javascript
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const numArr = Array.from(String(x));
  if (numArr[0] === "-") {
    numArr.shift();
    numArr.reverse();
    numArr.unshift("-");
  } else {
    numArr.reverse();
  }
  let result = Number(numArr.join(""));
  if (result >= Math.pow(2, 31) || result <= Math.pow(-2, 31)) {
    return 0;
  }
  return result;
};
```

## 第二次做

Runtime: 72 ms
Memory Usage: 37.5 MB

```javascript
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var INTEGER_MAX = Math.pow(2, 31);
  var INTEGER_MIN = Math.pow(-2, 31);

  let numStr = x.toString().split("").reverse().join("");
  let result = parseInt(numStr);
  if (x < 0) result = result * -1;
  if (result > INTEGER_MAX || result < INTEGER_MIN) result = 0;
  return result;
};
```
