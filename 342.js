/**
 * @param {number} num
 * @return {boolean}
 */

let max = Math.pow(2, 31)
let set = new Set([1])
for (let i = 4; i < max; i = i * 4) {
  set.add(i)
}

let isPowerOfFour = function (num) {
  return set.has(num)
};