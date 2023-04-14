const express = require('express');

const app = express();

const productList = [{
    id: 1,
    name: "car"
}]

app.get('', (req, res) => {
    res.send("<h1>hello world Here Check now</h1>");
})

app.get('/list', (req, res) => {
    res.status(200).json({
        message: "success",
        data: productList
    })
})

app.post("/list", (req, res) => {
    console.log(req.body)
    res.status(201).json({
        message: "created"
    })
})

app.listen(3000, () => {
    console.log("express is running on", 3000);
})