// module import/ export pattern

// 1st way
// module.exports = (a, b) => {
//     return a + b;
// }

// 2nd way
// const add = (a, b) => {
//     return a + b;
// }
// module.exports = add;


// 3rd way
// const add = (a, b) => {
//     return a + b;
// }
// const sub = (a, b) => {
//     return a - b;
// }
// module.exports = { add, sub }

// 4th way
// module.exports.add = (a, b) => {
//     return a + b;
// }
// module.exports.sub = (a, b) => {
//     return a - b;
// }