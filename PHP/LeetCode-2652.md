# LeetCode #2652 Sum Multiples

```php
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function sumOfMultiples($n) {
        $result = 0;
        for ($i=1; $i <= $n; $i++) { 
            if (($i % 3 == 0) || ($i % 5 == 0) || ($i % 7 == 0)) {
                $result += $i;
            }
        }
        return $result;
    }
}

$solution = new Solution();
print_r($solution->sumOfMultiples(7));
print_r("\n");
print_r($solution->sumOfMultiples(10));
print_r("\n");
print_r($solution->sumOfMultiples(9));
print_r("\n");
```
