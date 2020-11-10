# LeetCode #1480 Running Sum of 1d Array

```ruby
# @param {Integer[]} nums
# @return {Integer[]}
def running_sum(nums = [])
    sum = 0
    nums.map do |v|
        v + sum
        sum = sum + v
    end
end
```
