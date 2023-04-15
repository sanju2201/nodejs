const repl = require('repl')
const local = repl.start("$")

local.on("exit", () => {
    console.log("exit REPL")
    process.exit();
})