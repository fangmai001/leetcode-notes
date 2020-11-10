# LeetCode #832 Flipping an Image

- Runtime: 88 ms, faster than 50.43% of JavaScript online submissions for Flipping an Image.
- Memory Usage: 40.3 MB, less than 5.22% of JavaScript online submissions for Flipping an Image.

```javascript
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
  return A.map((arr) => {
    return arr.reverse().map((val) => {
      if (val === 0) {
        return 1;
      } else if (val === 1) {
        return 0;
      }
    });
  });
};

console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
);
console.log(
  flipAndInvertImage([
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 0],
  ])
);
```
