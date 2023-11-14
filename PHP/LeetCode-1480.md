# LeetCode #1480 Running Sum of 1d Array

## 第一次寫


```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function runningSum($nums) {
        $result = [];
        $total = 0;
        foreach ($nums as $num) {
            $total += $num;
            array_push($result, $total);
        }
        return $result;
    }
}

$solution = new Solution();
print_r($solution->runningSum([1,2,3,4]));
```
