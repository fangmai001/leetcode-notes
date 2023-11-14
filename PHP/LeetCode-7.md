# LeetCode #7 Reverse Integer

## 第一次寫


```php
class Solution {

    /**
     * @param Integer $x
     * @return Integer
     */
    function reverse($x) {
        $is_negative = false;
        if ($x < 0) {
            $is_negative = true;
            $x = $x * -1;
        }
        $s = (string)$x;            // 整數轉字串
        $a = str_split($s);         // 字串轉陣列
        $a = array_reverse($a);     // 陣列翻轉
        $r = implode('', $a);       // 陣列轉字串
        $r = (int)$r;               // 字串轉整數
        if ($is_negative) {
            $r = $r * -1;
        }
        if ($r > (2**31)-1 || $r < -2**31) {
            return 0;
        }
        return $r;
    }
}

$solution = new Solution();
echo($solution->reverse(123)."\n");
echo($solution->reverse(-123)."\n");
echo($solution->reverse(120)."\n");
echo($solution->reverse(1534236469)."\n");
echo($solution->reverse(-2147483412)."\n");
echo($solution->reverse(-10)."\n");
echo($solution->reverse(-2147483412)."\n");
```
