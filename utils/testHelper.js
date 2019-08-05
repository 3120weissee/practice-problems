module.exports = function testFunction(functionForTest, testCases, log) {
  for(let i = 0; i < testCases.length; i++) {
    const expectedResult = testCases[i][testCases[i].length-1]
    const result = functionForTest(...testCases[i])
    const testPasses = result === expectedResult

    if(testPasses) {
      console.log(`Test #${i+1}: ${testPasses}`)
    } else {
        console.log(`*** Test #${i+1}: ${testPasses}`)
    }

    if(log || !testPasses) {
      console.log('\tExpect:\t', expectedResult)
      console.log('\tActual:\t', result)
    }
  }
}