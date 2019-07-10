module.exports = function testFunction(functionForTest, testCases) {
  for(let i = 0; i < testCases.length; i++) {
    const result = functionForTest(...testCases[i])
    console.log(`Test #${i+1}: ${result === testCases[i][testCases.length-1]}`)
  }
}