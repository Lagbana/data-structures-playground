/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function isIsomorphic(s, t) {
  let m = {}
  let n = {}
  
  let str1 = s.split('')
  let str2 = t.split('')
  
  for (let i = 0; i < str1.length; i++) {
    if (m[str1[i]] && m[str1[i]] !== str2[i]) return false
    m[str1[i]] = str2[i]
    
    if (n[str2[i]] && n[str2[i]] !== str1[i]) return false
    n[str2[i]] = str1[i]
  }
  return true
}