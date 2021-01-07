/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
​
  let i = 0
  let nums = []
​
  while(i < n) {
  nums.push(start + 2*(i))
  i++
  }
​
  return nums.reduce((a, b) => a ^ b)
    
};
