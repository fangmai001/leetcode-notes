# LeetCode #219 Contains Duplicate II

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[i] === nums[j] && i !== j) {
        if (j - i <= k) {
          return true
        }
      }
    }
  }
  return false
};

console.log(containsNearbyDuplicate([1,2,3,1], 3));
console.log(containsNearbyDuplicate([1,0,1,1], 1));
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2));
console.log(containsNearbyDuplicate([99,99], 2));

```
