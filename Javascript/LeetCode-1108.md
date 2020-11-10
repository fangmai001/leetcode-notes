# LeetCode #1108 Defanging an IP Address

Runtime: 60 ms
Memory Usage: 33.2 MB

```javascript
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  return address.split(".").join("[.]");
};
```
