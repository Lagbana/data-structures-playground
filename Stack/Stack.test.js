const Stack = require('./index')

describe('Stack', () => {
  let stack

  beforeEach(() => {
    stack = new Stack()
  })

  it('Stack is empty', () => {
    expect(stack.size()).toEqual(0)
    expect(stack.isEmpty()).toBe(true)
  })

  it('it pushes elements', () => {
    stack.push(5)
    expect(stack.size()).toEqual(1)
    expect(stack.isEmpty()).toBe(false)
  })

  it('it pops elements ', () => {
    stack.push(5)
    stack.push(10)
    stack.push(20)

    expect(stack.pop()).toEqual(20)
    expect(stack.pop()).toEqual(10)
    expect(stack.pop()).toEqual(5)
    expect(stack.pop()).toEqual(undefined)
  })

  it('it implements LIFO logic', () => {
    stack.push(5)
    stack.push(10)
    stack.push(20)

    expect(stack.pop()).toEqual(20)
    expect(stack.pop()).toEqual(10)
    expect(stack.pop()).toEqual(5)
    expect(stack.pop()).toEqual(undefined)
  })

  it('allows to peek at the top element without popping it', () => {
    expect(stack.peek()).toEqual(undefined)

    stack.push(5)
    expect(stack.peek()).toEqual(5)

    stack.push(10)
    expect(stack.peek()).toEqual(10)

    stack.pop()
    expect(stack.peek()).toEqual(5)
  })

  it('returns the correct size', () => {
    expect(stack.size()).toEqual(0)

    stack.push(5)
    expect(stack.size()).toEqual(1)

    stack.push(10)
    expect(stack.size()).toEqual(2)

    stack.push(90)
    expect(stack.size()).toEqual(3)

    expect(stack.isEmpty()).toBe(false)

    stack.clear()
    expect(stack.isEmpty()).toBe(true)
  })

  it('it clears the current Stack', () => {
    stack.push(5)
    stack.push(10)
    stack.push(20)
    stack.clear()
    expect(stack.size()).toEqual(0)
  })
})
