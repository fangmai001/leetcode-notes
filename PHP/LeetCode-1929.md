# LeetCode #1929 Concatenation of Array

```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function getConcatenation($nums) {
        return array_merge($nums, $nums);
    }
}

$solution = new Solution();
print_r($solution->getConcatenation([1,2,1]));
print_r("\n");
print_r($solution->getConcatenation([1,3,2,1]));
print_r("\n");
```
