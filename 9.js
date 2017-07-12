/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function (x) {
  if (x < 0) {
    return false
  }
  return x.toString() === x.toString().split('').reverse().join('')
};