# LeetCode #7 Reverse Integer

- Runtime: 64 ms, faster than 25.22% of Ruby online submissions for Reverse Integer.
- Memory Usage: 210.1 MB, less than 12.50% of Ruby online submissions for Reverse Integer.

```ruby
# @param {Integer} x
# @return {Integer}
def reverse(x)
    integer_max = 2.pow(31)
    integer_min = -2.pow(31)

    result = x.to_s.split("").reverse.join('').to_i
    result = result * -1 if x < 0
    result = 0 if result > integer_max || result < integer_min
    result
end

p reverse(123)
p reverse(-123)
p reverse(120)
p reverse(0)
```
