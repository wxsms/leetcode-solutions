/**
 * @param {number} x
 * @return {number}
 */
let reverse = function (x) {
  let negative = false
  if (x < 0) {
    negative = true
    x = -x
  }
  x = parseInt(x.toString().split('').reverse().join(''))
  if (negative) {
    x = -x
  }
  if (x < -2147483648 || x > 2147483647) {
    return 0
  }
  return x
};

console.log(reverse(-123))