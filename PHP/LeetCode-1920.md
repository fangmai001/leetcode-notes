# LeetCode #1920 Build Array from Permutation

```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function buildArray($nums) {
        $result = [];
        foreach($nums as $n) {
            array_push($result, $nums[$n]);
        }
        return $result;
    }
}

$solution = new Solution();
print_r($solution->buildArray([0,2,1,5,3,4]));
print_r("\n");
print_r($solution->buildArray([5,0,1,2,3,4]));
print_r("\n");
```
