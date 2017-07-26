/**
 * @param {string} s
 * @return {string}
 */
let reverseVowels = function (s) {
  let set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
  let arr = s.split('')
  let length = arr.length
  for (let i = 0, j = length - 1; i < j;) {
    if (!set.has(arr[i])) {
      i++
      continue
    }
    if (!set.has(arr[j])) {
      j--
      continue
    }
    if (arr[i] === arr[j]) {
      i++
      j--
      continue
    }
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    i++
    j--
  }
  return arr.join('')
};

console.log(reverseVowels('Aa'))