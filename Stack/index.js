// Create Stacks class

// let items = []
export default class Stack {
  constructor () {
    this.count = 0
    this.items = []
  }

  push (elements) {
    this.items.push(elements)
  }

  pop () {
    const removedItem = this.items.pop()
    return removedItem
  }

  peek () {
    const topItem = this.items[this.items.length - 1]
    return topItem
  }

  isEmpty () {
    const bool = this.items.length === 0
    return bool
  }

  clear () {
    this.items = []
  }

  size () {
    const stackSize = this.items.length
    return stackSize
    }
    
    print() {
        console.log(`Current Stack: ${String(items)}`)
    }
}
