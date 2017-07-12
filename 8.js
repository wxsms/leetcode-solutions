/**
 * @param {string} str
 * @return {number}
 */
let myAtoi = function (str) {
  let result = parseInt(str)
  result = isNaN(result) ? 0 : result
  result = result > 2147483647 ? 2147483647 : result
  result = result < -2147483648 ? -2147483648 : result
  return result
};

console.log(myAtoi(''))