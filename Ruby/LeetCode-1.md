# LeetCode #1 Two Sum

## 第一次寫

- 效率最好
- Runtime: 76 ms, faster than 49.44% of Ruby online submissions for Two Sum.
- Memory Usage: 210.1 MB, less than 79.94% of Ruby online submissions for Two Sum.

```ruby
# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums = [], target)
    result = []
    nums.each_with_index do |x_val, x_index|
        # break if !result.empty?
        nums.last(nums.length - (x_index + 1)).each_with_index do |y_val, y_index|
            break if !result.empty?
            # puts %(#{result} #{x_val} + #{y_val} = #{x_val + y_val})
            if x_val + y_val == target
                result << x_index
                result << y_index + x_index + 1
            end
        end
    end
    return result
end

p two_sum([2,7,11,15], 9)
p two_sum([3,2,4], 6)
p two_sum([3,3], 6)
```

## 第二次寫

- 易讀，效率好
- Runtime: 48 ms, faster than 94.44% of Ruby online submissions for Two Sum.
- Memory Usage: 210.1 MB, less than 79.94% of Ruby online submissions for Two Sum.

```ruby
# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums = [], target)
    result = []
    index_end = nums.size - 1
    (0..index_end).each do |i|
        index_begin = i + 1
        (index_begin..index_end).each do |j|
            break if !result.empty?
            if nums[i] + nums[j] == target
                result = [i, j]
            end
        end
    end
    return result
end

p two_sum([2,7,11,15], 9)
p two_sum([3,2,4], 6)
p two_sum([3,3], 6)
```
