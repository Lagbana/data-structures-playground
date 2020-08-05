// Create Stacks class

// let items = []
class Stack {
  constructor () {
    this.count = 0
    this.items = new WeakMap().set(this, [])
  }

  push (elements) {
    const mapArray = this.items.get(this)
    mapArray.push(elements)
  }

  pop () {
    const mapArray = this.items.get(this)
    const removedItem = mapArray.pop()
    return removedItem
  }

  peek () {
    const mapArray = this.items.get(this)
    const topItem = mapArray[mapArray.length - 1]
    return topItem
  }

  isEmpty () {
    const mapArray = this.items.get(this)
    const bool = mapArray.length === 0
    return bool
  }

  clear () {
    this.items.set(this, [])
  }

  size () {
    const mapArray = this.items.get(this)
    const stackSize = mapArray.length
    return stackSize
  }

  print () {
    const mapArray = this.items.get(this)
    console.log(`Current Stack: ${String(mapArray)}`)
  }

  getStack () {
    const mapArray = this.items.get(this)
    return mapArray
  }
}

module.exports = Stack
