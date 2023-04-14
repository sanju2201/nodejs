// 1st / 2nd Way
// import add from './math-esm.mjs'
// console.log(add(4, 5))

// 3rd way
// import math from './math-esm.mjs'
// console.log(math.add(5, 8))
// console.log(math.sub(9, 2))
// or
import math from './math-esm.mjs'
const { add, sub } = math
console.log(add(5, 8))
console.log(sub(9, 2))

