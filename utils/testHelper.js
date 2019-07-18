module.exports = function testFunction(functionForTest, testCases, log) {
  for(let i = 0; i < testCases.length; i++) {
    const result = functionForTest(...testCases[i])
    const testPasses = result === testCases[i][testCases[i].length-1]

    if(testPasses) {
      console.log(`Test #${i+1}: ${testPasses}`)
    } else {
        console.log(`*** Test #${i+1}: ${testPasses}`)
    }

    if(log || !testPasses) {
      console.log(result)
    }
  }
}