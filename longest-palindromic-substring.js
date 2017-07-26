/**
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = function (s) {
  let length = s.length
  let extend = function (left, right) {
    while (left >= 0 && right < length && s[left] === s[right]) {
      left--
      right++
    }
    return s.slice(left + 1, right)
  }

  let result = ''
  for (let i = 0; i < length; i++) {
    let odd = extend(i, i)
    let even = extend(i, i + 1)
    let resultLength = result.length
    if (odd.length > resultLength) {
      result = odd
    }
    if (even.length > resultLength) {
      result = even
    }
  }
  return result
};

console.log(longestPalindrome('abbc'))