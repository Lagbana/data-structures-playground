const adder = (function () {
    counter = 0
    return function () { counter++; return counter}
})()

console.log(adder())
console.log(adder())
console.log(adder())