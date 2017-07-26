function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function (l1, l2) {
  if (l1.val === 0 && !l1.next) {
    return l2
  }
  if (l2.val === 0 && !l2.next) {
    return l1
  }
  let inc = 0
  let result = new ListNode(0)
  let resultHead = result
  do {
    result = result.next || result
    result.val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + inc
    inc = 0
    if (result.val > 9) {
      inc = 1
      result.val -= 10
    }
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
    result.next = l1 || l2 || inc ? {} : null
  } while (result.next)
  return resultHead
};

let list1 = new ListNode(9)

console.log(addTwoNumbers(list1, new ListNode(9)))