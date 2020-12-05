/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    
     if (k === 1) return 1
    
    let j = 0
    for (let i = 1; i <= n/2; i++) {
        
        if (i === (n - 1)/ 2 && k === j + 1) return n
​
​
​
        if ( n % i === 0 ) {
            j++
            if (i === n/2 && (k === j + 1)) {
              return n
            }
            if (k === j) return i
        }
        
    }
    
    return -1
    
};
