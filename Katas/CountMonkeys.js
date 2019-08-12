/**
 * You take your son to the forest to see the monkeys. You know that there are a certain number there (n),
 * but your son is too young to just appreciate the full number, he has to start counting them from 1.
 *
 * As a good parent, you will sit and count with him. Given the number (n), populate an array with all
 * numbers up to and including that number, but excluding zero.
 *
 * For example:
 * monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * monkeyCount(1) // --> [1]
 */

const testFunction = require('../utils/testHelper')

const countMonkeys = numMonkeys => {
  const monkeyCountArray = []
  let monkeyCount = 0
  while(monkeyCount < numMonkeys) {
    monkeyCountArray[monkeyCount++] = monkeyCount
  }

  return monkeyCountArray
}

const testCases = [
  [1, [1]],
  [5, [1,2,3,4,5]],
  [15, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]]
]

testFunction(countMonkeys, testCases)