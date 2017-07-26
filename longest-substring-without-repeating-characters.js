/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function (s) {
  if (s.length === 0) {
    return 0
  }
  let result = 0
  let strLength = s.length
  let i = 0, j = 0
  let set = new Set()
  while (i < strLength && j < strLength) {
    if (set.has(s[j])) {
      set.delete(s[i++])
    } else {
      set.add(s[j++])
      result = Math.max(result, j - i)
    }
  }
  return result
};
