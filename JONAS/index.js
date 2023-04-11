// const add = require("./add");
// console.log("Hello People");
// const sum = add(2, 3)
// console.log(sum)

// require("./batman")
// require("./superman")

const superHero = require("./super-hero")
console.log(superHero.getName())
superHero.setName("superMan")
console.log(superHero.getName())


const newSuperHero = require("./super-hero")
console.log(newSuperHero.getName())

