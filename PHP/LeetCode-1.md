# LeetCode #1 Two Sum

## 第一次寫


```php
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target) {
        foreach ($nums as $key => $x) {
            $y = $target - $x;
            if (isset($hashtable[$y])) {
                return [$hashtable[$y], $key];
            }
            $hashtable[$x] = $key;
        }
    }
}
```
