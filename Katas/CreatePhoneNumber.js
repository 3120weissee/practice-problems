/**
 * Write a function that accepts an array of 10 integers (between 0 and 9),
 * that returns a string of those numbers in the form of a phone number.
 *
 * Example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] => (123) 456-7890
 */
const testFunction = require('../utils/testHelper')

const buildPhoneNumber = numberArray => numberArray.reduce(
  (phoneNumber, currentNumber, idx) =>{
    phoneNumber += currentNumber
    if(idx === 2) phoneNumber += ') '
    if(idx === 5) phoneNumber += '-'
    return phoneNumber
  }, '(')

const testCases = [
  [[1,2,3,4,5,6,7,8,9,0], '(123) 456-7890'],
  [[2,2,2,2,2,2,2,2,2,2], '(222) 222-2222'],
  [[0,0,0,0,0,0,0,0,0,0], '(000) 000-0000'],
]

testFunction(buildPhoneNumber, testCases)