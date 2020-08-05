/**Convert a base 10 number to any base from 2 to 36*/
const Stack = require('../Stack/index')

function baseConverter (decNumber, base) {
  // check for non numbers
  if (
    !decNumber ||
    !base ||
    typeof decNumber !== 'number' ||
    typeof base !== 'number'
  )
    return 'Please input numbers only'

  if (!(base >= 2 && base <= 36)) return ''

  const remStack = new Stack()
  let remainder
  let baseString = ''
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  while (decNumber > 0) {
    remainder = Math.floor(decNumber % base)
    decNumber = Math.floor(decNumber / base)
    remStack.push(remainder)
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]
  }

  return baseString
}

console.log(baseConverter(100345, 2))
