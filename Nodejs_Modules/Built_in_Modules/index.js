// const path = require("node:path");
const path = require("path");
const EventEmitter = require("events");
const PizzaShop = require("./pizza-shop")

// =======================================================
// path Module

// console.log(__dirname)
// console.log(__filename)

// console.log(path.basename(__filename))
// console.log(path.basename(__dirname))

// console.log(path.extname(__filename))
// console.log(path.extname(__dirname))

// console.log(path.parse(__filename))
// console.log(path.parse(__dirname))


// console.log(path.format(path.parse(__filename)))

// console.log(path.isAbsolute(__filename))

// console.log(path.isAbsolute("./data.json"))

// console.log(path.join("folder1", "folder2", "index.html"))
// console.log(path.join("/folder1", "folder2", "index.html"))
// console.log(path.join("/folder1", "//folder2", "index.html"))
// console.log(path.join("/folder1", "//folder2", "../index.html"))
// console.log(path.join(__dirname, "data.json"))


// console.log(path.resolve("folder1", "folder2", "index.html"))
// console.log(path.resolve("/folder1", "folder2", "index.html"))
// console.log(path.resolve("/folder1", "//folder2", "index.html"))
// console.log(path.resolve("/folder1", "//folder2", "../index.html"))
// console.log(path.resolve(__dirname, "data.json"))

// =======================================================
// eventEmitter Module

// const emitter = new EventEmitter();

// emitter.on("order-pizza", (size, topping) => {
//     console.log("Oder Recieved")
//     console.log(`Backing a ${size} pizza with ${topping}`)

// })

// emitter.emit("order-pizza", "large", "chesse")

// =======================================================
// PizzaShop module o top of event module

const pizzaShop = new PizzaShop();

pizzaShop.on("order", (size, topping) => {
    console.log(`Order Recieved! Baking a pizza of ${size} with extra ${topping}`)
})

pizzaShop.order("large", "chesse");
pizzaShop.displayOrder();