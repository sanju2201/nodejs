// const add = require('./app')

// console.log("Index.js")
// console.log(add(10, 2))

// =========================

// require('./batman')
// require('./superman')

// const superHero = require('./superHero');
// console.log(superHero.getName());

// superHero.setName("SpiderMan")
// console.log(superHero.getName());


// // This will also give name as Superman insted of Batman as the new instance is created, just because of module caching
// const newSuperHero = require('./superHero');
// console.log(newSuperHero.getName());

// =========================

// const SuperHero = require("./superHero")

// const Batman = new SuperHero("batman")
// console.log(Batman.getName());
// Batman.setName("Sanju")
// console.log(Batman.getName());

// const Spiderman = new SuperHero("Spiderman")
// console.log(Spiderman.getName());

// =========================

// module import/ export pattern
// 1st / 2nd way
// const add = require('./math')
// console.log(add(2, 3))

// 3rd / 4th way
// const math = require('./math')
// console.log(math.add(2, 3))
// console.log(math.sub(7, 3))

// or

// const { add, sub } = require('./math')
// console.log(add(2, 8))
// console.log(sub(10, 3))