# LeetCode #217 Contains Duplicate

```ruby
# @param {Integer[]} nums
# @return {Boolean}
def contains_duplicate(nums)
    nums.length != nums.uniq.length
end

p contains_duplicate([1,2,3,1])
p contains_duplicate([1,2,3,4])
p contains_duplicate([1,1,1,3,3,4,3,2,4,2])
```
