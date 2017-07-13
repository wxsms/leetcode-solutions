/**
 * @param {string} s
 * @return {number}
 */
let firstUniqChar = function (s) {
  let length = s.length
  for (let i = 0; i < length; i++) {
    if (s.indexOf(s[i]) === i && s.lastIndexOf(s[i]) === i) {
      return i
    }
  }
  return -1
};

console.log(firstUniqChar("leetcode"))