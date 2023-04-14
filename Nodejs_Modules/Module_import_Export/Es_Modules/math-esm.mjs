// 1st Way

// const add = (a, b) => {
//     return a + b;
// }
// export default add;

// 2nd Way
// export default (a, b) => {
//     return a + b;
// }

// 3rd Way

const add = (a, b) => {
    return a + b;
}
const sub = (a, b) => {
    return a - b;
}

export default { add, sub }