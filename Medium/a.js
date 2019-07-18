// Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

// For example, given the following Node class

/*
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
*/

// The following test should pass:

// node = Node('root', Node('left', Node('left.left')), Node('right'))
// assert deserialize(serialize(node)).left.left.val == 'left.left'

const testFunction = require('../utils/testHelper')

class Node {
  constructor(value, left, right) {
    this.value = value
    this.left = left
    this.right = right
  }
}

// Node(0, Node(1), Node(2))

const serialize = (rootNode) => {
  if(rootNode === undefined || rootNode === null) {
    return 'null'
  }
  const { value, left, right } = rootNode
  return `Node(${value}, ${serialize(left)}, ${serialize(right)})`
}

const serializeTestCases = [
  [new Node(0), 'Node(0, null, null)'],
  [new Node(0, new Node(1), new Node(2)), 'Node(0, Node(1, null, null), Node(2, null, null))'],
  [new Node(0, new Node(1, new Node(2)), new Node(3)), 'Node(0, Node(1, Node(2, null, null), null), Node(3, null, null))']
]

// testFunction(serialize, serializeTestCases, true)

module.exports = function mediumA() {
  console.log('\nRun Medium A')
  testFunction(serialize, serializeTestCases)
}