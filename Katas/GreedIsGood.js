/**
 * Given an array of 5 dice values, return score
 * - Numbers can only count toward one point value (i.e. given [1,1,1] the total points are 1000, not 1300)
 *
 * Three 1's === 1000 pts
 * Three 6's === 600 pts
 * Three 5's === 500 pts
 * Three 4's === 400 pts
 * Three 3's === 300 pts
 * Three 2's === 200 pts
 * One 1 === 100 pts
 * One Five === 50 pts
 *
 * Examples:
 * [5,1,3,4,1] => 50 + 2*100 = 250
 * [1,1,1,3,1] => 1000 + 100 = 1100
 * [2,4,4,5,4] => 400 + 50 = 450
 */
const testFunction = require('../utils/testHelper')

const calculateGreedPoints = diceRolls => {
  const rollTotals = diceRolls.reduce((rollTotals, curRoll) => {
    if(rollTotals[curRoll]) {
      rollTotals[curRoll] += 1
    } else {
      rollTotals[curRoll] = 1
    }
    return rollTotals
  }, {})

  const checkTriples = (dieValue) => {
    const threesValues = {
      1: 1000,
      2: 200,
      3: 300,
      4: 400,
      5: 500,
      6: 600
    }
    if(rollTotals[dieValue] && rollTotals[dieValue] >= 3) return threesValues[dieValue]
    return 0
  }

  let points = 0
  Object.keys(rollTotals).forEach(value => {
    points += checkTriples(value)
  })

  if(rollTotals[1] && rollTotals[1] % 3 !== 0) {
    if(rollTotals[1] > 3) rollTotals[1] -= 3
    points += rollTotals[1] * 100
  }

  if(rollTotals[5] && rollTotals[5] % 3 !== 0) {
    if(rollTotals[5] > 3) rollTotals[5] -= 3
    points += rollTotals[5] * 50
  }

  return points
}

const testCases = [
  [[5,1,3,4,1], 250],
  [[1,1,1,3,1], 1100],
  [[2,4,4,5,4], 450],
  [[1,1,1,1,1], 1200],
  [[2,3,4,6,2], 0]
]

testFunction(calculateGreedPoints, testCases)