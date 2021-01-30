/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const map = {}

    for (let i of nums){
        if (map[i] !== undefined) return i
        map[i] = 1
    }
};