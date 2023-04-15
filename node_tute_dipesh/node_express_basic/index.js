const express = require('express')
const app = express();
require('dotenv').config();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
    // res.send("Hello World")
    res.json({ message: "This is home Page" })
})

app.get("/users", (req, res) => {
    res.json({ message: "Get all the user" })
})

app.get("/users/:id", (req, res) => {
    res.json({ message: `Get user with Id ${req.params.id}` })
})

app.post("/users/", (req, res) => {
    res.json({ message: `Create new User` })
})

app.put("/users/:id", (req, res) => {
    res.json({ message: `Update user with Id ${req.params.id}` })
})

app.delete("/users/:id", (req, res) => {
    res.json({ message: `Delete user with Id ${req.params.id}` })
})

app.listen(PORT, () => {
    console.log(`Express server is running on ${PORT}`)
})
