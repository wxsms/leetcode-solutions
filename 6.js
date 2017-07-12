/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
let convert = function (s, numRows) {
  let length = s.length
  if (length <= numRows) {
    return s
  }
  if (numRows === 1) {
    return s
  }
  if (numRows === 2) {
    let arr = s.split('')
    let line1 = arr.filter((v, i) => i % 2 === 0).join('')
    let line2 = arr.filter((v, i) => i % 2 === 1).join('')
    return line1 + line2
  }
  let step = 2 * numRows - 2
  let result = '', i = 0
  do {
    result += s[i]
    i += step
  } while (i < length)
  for (let i = 1; i < numRows - 1; i++) {
    let index = i
    result += s[index]
    let x = true
    index = index + step - i * 2
    while (index < length) {
      result += s[index]
      if (x) {
        index += i * 2
      } else {
        index = index + step - i * 2
      }
      x = !x
    }
  }
  i = numRows - 1
  do {
    result += s[i]
    i += step
  } while (i < length)
  return result
};

console.log(convert('ABCDE', 4))
