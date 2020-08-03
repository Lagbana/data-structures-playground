const {
  isEven,
  someEven,
  allEven,
  forEachSquared,
  mapFunction,
  filterFunction,
  reduceFunction
} = require('./index')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evens = [0, 2, 4, 6, 8, 10]
const odds = [1, 3, 5, 7, 9]
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
    expect(forEachSquared(odds)).toEqual(undefined)
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
