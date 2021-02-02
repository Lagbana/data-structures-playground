/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
 const adder = (result=[], i=0, sum=0) => {
   if (i === nums.length) {
     return result
   }

   sum+=nums[i]
   result.push(sum)
   i++

   return adder( result, i, sum )

 }

 return adder()
};