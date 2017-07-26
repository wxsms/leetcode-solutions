/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
let hammingDistance = function (x, y) {
  let max = Math.max(x, y).toString(2)
  let min = Math.min(x, y).toString(2)
  let maxLength = max.length
  let minLength = min.length
  let gap = maxLength - minLength
  while (gap > 0) {
    min = '0' + min
    gap--
  }
  let result = 0
  for (let i = 0; i < maxLength; i++) {
    result += max[i] === min[i] ? 0 : 1
  }
  return result
};

console.log(hammingDistance(1, 4))