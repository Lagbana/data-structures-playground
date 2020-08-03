
// Checker of even numbers
const isEven = x => x % 2 === 0

// Check if every array element meets condition
const allEven = (array, condition) => array.every(condition)

// Check if some array elements meet the condition
const someEven = (array, condition) => array.some(condition)

// Run function for every element of an array to create
const forEachSquared = (numsArray) => {
    return numsArray.forEach(x =>  x ** 2)
}

// Return a new array after applying function on all elements of the array
const mapFunction = (numsArray) => {
    const newArray = numsArray.map(x => x + 1)
    return newArray
}

// Return a new array with elements that meet the condition
const filterFunction = (numsArray, condition) => {
    const filteredArray = numsArray.filter(condition)
    return filteredArray
}

// execute a reducer on an array and resolve to a single output
const reduceFunction = (array) => {
    const result = array.reduce((prev, curr) => prev + curr)
    return result
}


module.exports = {
    isEven,
    allEven,
    someEven,
    forEachSquared,
    mapFunction,
    filterFunction,
    reduceFunction
}