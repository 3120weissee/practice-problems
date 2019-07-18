// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

const testFunction = require('../utils/testHelper')

const sumChecker = (numberList, expectedSum) => {
	const subChecker = (sum, starter, numList) => {
		if(!numList.length) {
			return false
		}

		if(sum === starter + numList[0]) {
			return true
		}

		return subChecker(sum, starter, numList.slice(1))
	}

	let results = false
	let i = 0

	while(!results && i < numberList.length-1) {
		results = subChecker(expectedSum, numberList[i], numberList.slice(i+1))
		i++
	}

	return results
}

const testCases = [
	[[10, 15, 3, 7], 17, true],
	[[0, 1, 2, 3, 4, 5], 30, false],
	[[1, 1, 1, 1, 1], 2, true],
	[[0, 1, 2, 3, 4], 7, true],
	[[], 0, false],
	[[1], 1, false],
	[[17, -2], 15, true]
]

// testFunction(sumChecker, testCases)

module.exports = function easyA() {
	console.log('\nRun Easy A')
	testFunction(sumChecker, testCases)
}