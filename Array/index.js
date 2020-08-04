// Checker of even numbers
const isEven = x => x % 2 === 0

// Check if every array element meets condition
const allEven = (array, condition) => array.every(condition)

// Check if some array elements meet the condition
const someEven = (array, condition) => array.some(condition)

// Run function for every element of an array to create
const forEachSquared = numsArray => {
  return numsArray.forEach(x => x ** 2)
}

// Return a new array after applying function on all elements of the array
const mapFunction = numsArray => {
  const newArray = numsArray.map(x => x + 1)
  return newArray
}

// Return a new array with elements that meet the condition
const filterFunction = (numsArray, condition) => {
  const filteredArray = numsArray.filter(condition)
  return filteredArray
}

// execute a reducer on an array and resolve to a single output
const reduceFunction = array => {
  const result = array.reduce((prev, curr) => prev + curr)
  return result
}
// reverse the array elements
const reverseFunction = array => {
  const result = array.reverse(array)
  return result
}

const spliceFunction = (array, index, numbersToRemove, elementToAdd) => {
  elementToAdd
    ? array.splice(index, numbersToRemove, elementToAdd)
    : array.splice(index, numbersToRemove)
  return array
}

const sorter = array => {
  array.sort((a, b) => a - b)
  return array
}

const finder = (array, callback) => {
  const result = array.find(callback)
  return result
}

const findIndex = (array, callback) => {
  const index = array.findIndex(callback)
  return index
}

const isIncluded = (array, item) => {
  const bool = array.includes(item)
  return bool
}

const arrayFrom = array => {
  const newArray = Array.from(array)
  return newArray
}

const arrayOf = array => {
  const newArray = Array.of(...array)
  return newArray
}

const arrayCopyWithin = (array, toIndex, fromIndex, endIndex) => {
  const newArray = array.copyWithin(toIndex, fromIndex, endIndex)
  return newArray
}

module.exports = {
  isEven,
  allEven,
  someEven,
  forEachSquared,
  mapFunction,
  filterFunction,
  reduceFunction,
  reverseFunction,
  spliceFunction,
  sorter,
  finder,
  findIndex,
  isIncluded,
  arrayFrom,
  arrayOf,
  arrayCopyWithin
}
