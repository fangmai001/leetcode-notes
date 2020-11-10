# LeetCode #258 Add Digits

```javascript
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let numArr = num.toString().split("");
  let sum = 0;

  while (numArr.length > 1) {
    for (let i = 0; i < numArr.length; i++) {
      sum = sum + parseInt(numArr[i]);
    }
    num = sum;
    sum = 0;
    numArr = num.toString().split("");
  }

  return num;
};

console.log(addDigits(38));

```
