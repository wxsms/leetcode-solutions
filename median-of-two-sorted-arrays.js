/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
let findMedianSortedArrays = function (nums1, nums2) {
  let arr = nums1.concat(nums2).sort((a, b) => a - b)
  let length = arr.length
  return length % 2 === 0 ? (arr[length / 2 - 1] + arr[length / 2]) / 2 : arr[length / 2 - 0.5]
};

let arr1 = [1, 2]
let arr2 = [3, 4]
console.log(findMedianSortedArrays(arr1, arr2))