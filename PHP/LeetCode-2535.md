# LeetCode #2535 Difference Between Element Sum and Digit Sum of an Array

```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function differenceOfSum($nums) {
        $elementSum = 0;
        foreach ($nums as $n) {
            $elementSum += $n;
        }
        
        $digitSum = 0;
        $spNums = implode('', $nums); // 整數轉字串 
        $spNums = str_split($spNums); // 字串轉陣列(按每個數字切割)
        foreach ($spNums as $n) {
            $digitSum += $n;
        }

        $result = abs($elementSum - $digitSum); // 取絕對值 
        return $result;
    }
}

$solution = new Solution();
print_r($solution->differenceOfSum([1,15,6,3]));
print_r("\n");
print_r($solution->differenceOfSum([1,2,3,4]));
print_r("\n");
```
