# LeetCode #1431 Kids With the Greatest Number of Candies

## 第一次寫

Runtime: 68 ms
Memory Usage: 36.2 MB

```javascript
var kidsWithCandies = function(candies, extraCandies) {
  const result = [];
  for (let i = 0; i < candies.length; i++) {
    let greatestNum = candies[i] + extraCandies;
    let isGreatest = candies.every((v) => {
      return v <= greatestNum;
    });
    result.push(isGreatest);
  }
  return result;
};
```

## 執行速度更快

Runtime: 52 ms
Memory Usage: 36.5 MB

```javascript
var kidsWithCandies = function(candies, extraCandies) {
  const result = [];
  candies.forEach((candy) => {
    let greatestNum = candy + extraCandies;
    let isGreatest = candies.every((v) => {
      return v <= greatestNum;
    });
    result.push(isGreatest);
  });
  return result;
};
```
