# LeetCode #1 Two Sum

## 第一次寫

Runtime: 4008 ms
Memory Usage: 42.2 MB

```javascript
var twoSum = function(nums, target) {
  for (i in nums) {
    for (j in nums) {
      if (i === j) {
        continue;
      }
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
```

## 好讀的作法

Runtime: 196 ms
Memory Usage: 36.2 MB

```javascript
var twoSum = function(nums, target) {
  const gapDirect = [];
  for (let i = 0; i < nums.length; i++) {
    let result = gapDirect.find((v) => {
      return v.gap === nums[i];
    });
    if (result) {
      return [result.index, i];
    } else {
      gapDirect.push({
        index: i,
        gap: target - nums[i],
      });
    }
  }
};
```

## 速度最快

Runtime: 72 ms
Memory Usage: 34.3 MB

```javascript
var twoSum = function(nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in obj) {
      return [obj[nums[i]], i];
    }
    obj[target - nums[i]] = i;
  }
};
```
