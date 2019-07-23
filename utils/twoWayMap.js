const buildObject = (accumObject, value, index) => {
  accumObject[value] = index
  return accumObject
}

module.exports = class TwoWayMap {
  constructor(firstValueArray, secondValueArray) {
    this.firstValues = firstValueArray.reduce(buildObject, {})
    this.firstValuesArray = firstValueArray.slice()
    this.secondValues = secondValueArray.reduce(buildObject, {})
    this.secondValuesArray = secondValueArray.slice()
  }

  getValue(keyValue) {
    if(this.firstValues[keyValue] !== undefined) {
      return this.secondValuesArray[this.firstValues[keyValue]]
    }
    if(this.secondValues[keyValue] !== undefined) {
      return this.firstValuesArray[this.secondValues[keyValue]]
    }
  }
}