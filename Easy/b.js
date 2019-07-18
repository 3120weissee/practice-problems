/*********************************************************************************************************

A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:

   0
  / \
 1   0
    / \
   1   0
  / \
 1   1

**********************************************************************************************************/
const testFunction = require('../utils/testHelper')

class Node {
  constructor(value, left, right) {
    this.value = value
    this.left = left
    this.right = right
  }
}

const nodeSeven = new Node(1)
const nodeSix = new Node(1)
const nodeFive = new Node(0)
const nodeFour = new Node(1, nodeSix, nodeSeven)
const nodeThree = new Node(0, nodeFour, nodeFive)
const nodeTwo = new Node(1)
const rootNode = new Node(0, nodeTwo, nodeThree)

const checkUnivalTree = (startNode) => {
  if(startNode === undefined) {
    return true
  }

  const startValue = startNode.value
  const leftNode = startNode.left
  const rightNode = startNode.right

  if(leftNode === undefined && rightNode === undefined) {
    return true
  }

  const leftValue = leftNode === undefined ? null : leftNode.value
  const rightValue = rightNode === undefined ? null : rightNode.value

  if((leftValue === null || startValue === leftValue) && (rightValue === null || startValue === rightValue)) {
    return checkUnivalTree(leftNode) && checkUnivalTree(rightNode)
  }
  return false
}


const findUnivalTrees = (rootNode, count=0) => {
  const isUnivalTree = checkUnivalTree(rootNode)

  const leftCount = rootNode.left === undefined ? count : findUnivalTrees(rootNode.left, count)
  const rightCount = rootNode.right === undefined ? count : findUnivalTrees(rootNode.right, count)

  if(isUnivalTree) {
    count += 1
  }

  return count + leftCount + rightCount
}

const testCases = [
  [rootNode, undefined, 5],
  [nodeFour, undefined, 3],
  [nodeSix, undefined, 1]
]

// testFunction(findUnivalTrees, testCases)

module.exports = function easyB() {
  console.log('\nRun Easy B')
  testFunction(findUnivalTrees, testCases)
}