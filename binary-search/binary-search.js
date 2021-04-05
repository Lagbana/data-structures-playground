/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let left = 0
    let right = nums.length - 1
    
    while (left <= right) {
        
        if (nums[left] === target) return left
        if (nums[right] === target) return right
            
        const idx = Math.floor((left + right) / 2)
        const midNum = nums[idx] 
        if (midNum === target) return idx
        
        if (target > midNum) {
            left = idx
            left++
        } else if (target < midNum) {
            right = idx
            right--
        }
    }
    
    return -1
};