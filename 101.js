function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let isSymmetric = function (root) {
  if (root === null) {
    return true
  }
  let testArr = []
  let go = function (node) {
    if (node.left && node.right === null) {
      node.right = new TreeNode(null)
      if (node.left.left || node.left.right) {
        node.right.left = new TreeNode(null)
        node.right.right = new TreeNode(null)
      }
    }
    if (node.right && node.left === null) {
      node.left = new TreeNode(null)
      if (node.right.left || node.right.right) {
        node.left.left = new TreeNode(null)
        node.left.right = new TreeNode(null)
      }
    }
    if (node.left) {
      go(node.left)
    }
    testArr.push(node.val === null ? 'null' : node.val)
    if (node.right) {
      go(node.right)
    }
  }
  go(root)
  // console.log(JSON.stringify(testArr))
  return testArr.join('') === testArr.reverse().join('')
};

let node = new TreeNode(5)
node.left = new TreeNode(4)
node.right = new TreeNode(1)
node.left.left = null
node.left.right = new TreeNode(1)
node.left.right.left = new TreeNode(2)
node.left.right.right = null
node.right.left = null
node.right.right = new TreeNode(4)
node.right.right.left = new TreeNode(2)
node.right.right.right = null
console.log(isSymmetric(node))