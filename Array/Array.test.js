const {
  isEven,
  someEven,
  allEven,
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
} = require('./index')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evens = [0, 2, 4, 6, 8, 10]
const odds = [1, 3, 5, 7, 9]
const unordered = [5, 1, 3, 2, 4]
const letters = ['a', 'b', 'c', 'd', 'e']
const object = {}

describe('Array checker', () => {
  it('returns true if data structure is an array', () => {
    expect(Array.isArray(numbers)).toBe(true)
  })
  it('returns false if data structure is not an array', () => {
    expect(Array.isArray(object)).toBe(false)
  })
})

describe('Array.some method', () => {
  it('returns true if any array element is even', () => {
    expect(someEven(numbers, isEven)).toBe(true)
  })

  it('returns false if no array element is even', () => {
    expect(someEven(letters, isEven)).toBe(false)
  })
})

describe('Array.every method', () => {
  it('returns true if all elements in array are even', () => {
    expect(allEven(evens, isEven)).toBe(true)
  })

  it("returns false if at least one element in array isn't even", () => {
    expect(allEven(numbers, isEven)).toBe(false)
  })
})

describe('Array.map method', () => {
  it('it adds 1 to each number in the array', () => {
    expect(mapFunction(odds)).toEqual([2, 4, 6, 8, 10])
  })
})

describe('Array.forEach method', () => {
  it('return undefined', () => {
    expect(forEachSquared(odds)).toBeUndefined()
  })
})

describe('Array.filter method', () => {
  it('return an array that is filtered', () => {
    expect(filterFunction(numbers, isEven)).toEqual([2, 4, 6, 8, 10])
  })
})

describe('Array.reducer method', () => {
  it('return an sum of array', () => {
    expect(reduceFunction(numbers)).toEqual(55)
  })
})

describe('Array.splice method', () => {
  it('it removes elements from an array', () => {
    expect(spliceFunction(letters, 1, 2)).toEqual(['a', 'd', 'e'])
  })

  it('it adds elements to an array', () => {
    const testArray = [1, 3, 5, 7, 9]
    expect(spliceFunction(testArray, 2, 0, 8)).toEqual([1, 3, 8, 5, 7, 9])
  })
})

/*
  Sorting Methods
*/

describe('Array.reverse method', () => {
  it('it reverses an array', () => {
    expect(reverseFunction(odds)).toEqual([9, 7, 5, 3, 1])
  })
})

describe('Array.sort method', () => {
  it('it sorts an array', () => {
    expect(sorter(unordered)).toEqual([1, 2, 3, 4, 5])
  })
})

/*
  Finder Methods
*/

describe('Array.find method', () => {
  it('it finds an item in array', () => {
    expect(finder(evens, item => item === 10)).toEqual(10)
  })
})

describe('Array.findIndex method', () => {
  it('it finds an item index in array', () => {
    expect(findIndex(evens, item => item === 10)).toEqual(5)
  })
})

describe('Array.includes method', () => {
  it('returns true on search', () => {
    expect(isIncluded(numbers, 10)).toBe(true)
  })

  it('returns false on search', () => {
    expect(isIncluded(numbers, 15)).toBe(false)
  })
})

/*
  Creators and copiers
*/
describe('Array.from method', () => {
  it('creates a shallow copy of array', () => {
    const testArray = [{boy: 'James'}, 5, 8, 'apple']
    expect(arrayFrom(testArray)).toEqual([{boy: 'James'}, 5, 8, 'apple'])
  })
  it('shouldn\'t equal copy of array', () => {
    const testArray = [{boy: 'James'}, 5, 8, 'apple']
    expect(arrayFrom(testArray)).not.toBe([{boy: 'Ted'}, 5, 8, 'apple'])
  })
})

describe('Array.of method', () => {
  const testArray = [1, 2, 3, 4, 5]
  it('creates a new array with copied values', () => {
    expect(arrayOf(testArray)).toEqual([1, 2, 3, 4, 5])
  })
})

describe('Array.copyWithin method', () => {
  const testArray = [1, 2, 3, 4, 5]
  it('it copies index 3 value to index 0', () => {
    expect(arrayCopyWithin(testArray, 0, 3, 4)).toEqual([4, 2, 3, 4, 5])
  })
  it('it copies index 2 - 4 values to index 0', () => {
    expect(arrayCopyWithin(testArray, 0, 2)).toEqual([3, 4, 5, 4, 5])
  })
})
