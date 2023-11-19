# LeetCode #709 To Lower Case

```php
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function toLowerCase($s) {
        return strtolower($s);
    }
}

$solution = new Solution();
print_r($solution->toLowerCase("Hello"));
print_r("\n");
print_r($solution->toLowerCase("here"));
print_r("\n");
print_r($solution->toLowerCase("LOVELY"));
print_r("\n");
```
