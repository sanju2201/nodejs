// const path = require("node:path");
// const path = require("path");
// const EventEmitter = require("events");
// const PizzaShop = require("./pizza-shop")
// const DrinkMachine = require('./drink-machine')

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

// const pizzaShop = new PizzaShop();
// const drinkMMachine = new DrinkMachine();

// pizzaShop.on("order", (size, topping) => {
//     console.log(`Order Recieved! Baking a pizza of ${size} with extra ${topping}`)
// drinkMMachine.serveDrink(size);
// })

// pizzaShop.order("large", "chesse");
// pizzaShop.displayOrder();

// =======================================================
// Buffer data

// const buffer = new Buffer.from("sanju")

// buffer.write("Manna") // this will replace the sanju by manna


// console.log(buffer)
// console.log(buffer.toString()) // sanju
// console.log(buffer.toJSON()) //{ type: 'Buffer', data: [ 115, 97, 110, 106, 117 ] }


// =======================================================
// fs Module

// const fs = require("fs")

// // Read file data
// const readFileData = fs.readFileSync("./file.txt", 'utf-8');
// console.log(readFileData);

// fs.readFile("./file.txt", "utf-8", (error, data) => {
//     if (error) {
//         console.log(error)
//     }
//     else {
//         console.log(data)
//     }
// })

// // Write file data

// fs.writeFileSync("./greet.txt", "Hello Greet file")

// fs.writeFile("./greetAsync.txt", "Async file write", (error, data) => {
//     if (error) {
//         console.log(error)
//     }
//     else {
//         console.log("successfully created")
//     }
// })

// Readable and writtble stream

// const fs = require("fs")
// const zlib = require('zlib')

// const gzip = zlib.createGzip();
// const readableStream = fs.createReadStream("./file.txt", { encoding: "utf-8", highWaterMark: 2 });

// readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"))
// const writeableStream = fs.createWriteStream("./file2.txt")

// readableStream.on("data", (chunkOfData) => {
//     console.log(chunkOfData)
//     writeableStream.write(chunkOfData)
// })

// readableStream.pipe(writeableStream)

// =======================================================
// fs/promises Module

// const file = require('fs/promises');

// let fileName = "newton.txt";

// let content = "welcome to MERN stack";

// // Create a new file
// const writeFileDetails = async (fileName, content) => {
//     await file.writeFile(fileName, content);
// }

// writeFileDetails(fileName, content);

// // Giving the current path
// console.log(__dirname);


// // Read a file
// // files - binary - buffer-- > utf - 8 -- > toString()

// const readFileDetails = async (fileName) => {
//     let result = await file.readFile(fileName);
//     //binary format - buffer - unicode encoded string
//     // console.log(result);
//     return result.toString();

// }

// readFileDetails(fileName).then((result) => {
//     console.log(result);
// })

// // buffer data
// // buffer-- > toString()

// // Appending the data
// const appendFileDetails = async (fileName) => {
//     await file.appendFile(fileName, " And my name is akash");
// }
// appendFileDetails(fileName);

// =======================================================

// http Module

const http = require("http");

// const server = http.createServer((req, res) => {
//     // res.writeHead(200, { "Content-Type": "text/plain" })
//     res.writeHead(200, { "Content-Type": "text/html" })
//     res.end("<h>Hello World</h1>")
// })
// server.listen(3000, () => {
//     console.log("Server running on PORT 3000");
// });


// const server = http.createServer((req, res) => {
//     const superHero = {
//         firstName: "Sanju",
//         lastName: "Manna"
//     }
//     res.writeHead(200, { "Content-Type": "application/json" })
//     res.end(JSON.stringify(superHero)) // returning json data to the client as object cant be send directly
// })

// server.listen(3000, () => {
//     console.log("Running on localhost:3000")
// })

//  Sending html page as response

// const fs = require("fs");

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html" })
//     // const html = fs.readFileSync('./index.html', "utf-8")
//     // res.end(html)
//     fs.createReadStream('./index.html').pipe(res)
// })

// server.listen(3000, () => {
//     console.log("Server is running on PORT 3000")
// })


// Routing with http module

const server = http.createServer((req, res) => {
    // res.end(req.url)
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" })
        res.end("Home Page")
    }
    else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" })
        res.end("About Page")
    } else {
        res.writeHead(404)
        res.end("Page Not Found")
    }
})

server.listen(3000, () => {
    console.log("Server is running on PORT 3000")
})


