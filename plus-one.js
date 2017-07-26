/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function (digits) {
  let inc = 1
  let length = digits.length
  for (let i = length - 1; i >= 0; i--) {
    let result = digits[i] + inc
    if (result === 10) {
      digits[i] = 0
      inc = 1
    } else {
      inc = 0
      digits[i] = result
    }
  }
  if (inc === 1) {
    digits.unshift(1)
  }
  return digits
};