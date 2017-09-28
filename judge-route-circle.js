/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let up = (moves.match(/U/g) || '').length
  let down = (moves.match(/D/g) || '').length
  let left = (moves.match(/L/g) || '').length
  let right = (moves.match(/R/g) || '').length
  return up === down && left === right
};
