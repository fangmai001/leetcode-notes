# LeetCode #1365 How Many Numbers Are Smaller Than the Current Number

Runtime: 116 ms  
Memory Usage: 40.3 MB  

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const resultArr = [];
  resultArr.length = nums.length;
  resultArr.fill(0);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] !== nums[j] && nums[j] < nums[i]) {
        resultArr[i]++;
      }
    }
  }
  return resultArr;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));
console.log(smallerNumbersThanCurrent([7, 7, 7, 7]));
```
