/***************************************************************************************************************

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.

***************************************************************************************************************/

const TwoWayMap = require('../utils/twoWayMap')
const testFunction = require('../utils/testHelper')

const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z'
]

const alphaValues = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
  '11', '12', '13', '14', '15', '16', '17', '18',
  '19', '20', '21', '22', '23', '24', '25', '26'
]

const alphaMap = new TwoWayMap(alphabet, alphaValues)

const decode = (value) => alphaMap.getValue(value)

const decodeMessage = (message) => {
  if(message === '') return 1
  const firstCharCheck = decode(message.substring(0, 1)) ? decodeMessage(message.substring(1)) : 0
  const firstTwoCheck = message.length > 1 && decode(message.substring(0, 2)) ? decodeMessage(message.substring(2)) : 0
  return firstCharCheck + firstTwoCheck
}

const decodeMessagesTestCases = [
  ['111', 3],
  ['1', 1],
  ['26', 2],
  ['36', 1]
]

// testFunction(decodeMessage, decodeMessagesTestCases)

module.exports = function mediumC() {
  console.log('\nRun Medium C')
  testFunction(decodeMessage, decodeMessagesTestCases)
}