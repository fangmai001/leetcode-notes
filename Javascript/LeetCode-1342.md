# LeetCode #1342 Number of Steps to Reduce a Number to Zero

```javascript
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let step = 0;
  while (num !== 0) {
    if (num % 2 == 0) {
      num = num / 2;
    } else {
      num = num - 1;
    }
    step++;
  }
  return step;
};

console.log(numberOfSteps(14));
console.log(numberOfSteps(8));
console.log(numberOfSteps(123));

```
