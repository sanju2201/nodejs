const express = require('express');
const app = express();
const router = express.Router()
const path = require('path');
const logger = require("morgan")

const PORT = 3000;

// Built in Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/static", express.static(path.join(__dirname, "public")))


// Application level middleware function
const loggerMiddleWare = (req, res, next) => {
    console.log(`${new Date()}==> [${req.method}] [${req.url}]`);
    next();
}
app.use(loggerMiddleWare);

// Router-level Middleware

app.use("/api/users", router);

const fakeAuth = (req, res, next) => {
    const authStatus = true;
    if (authStatus) {
        console.log("User authStatus: ", authStatus);
        next();
    } else {
        res.status(401);
        throw new Error("User is not authorized");
    }
}

const getUsers = (req, res) => {
    res.json({ message: "Get all users" })

}
const createUser = (req, res) => {
    res.json({ messgae: "Create new user" })
}

router.use(fakeAuth)
router.route("/").get(getUsers).post(createUser);

// Error handler MiddleWare
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);
    switch (statusCode) {
        case 401:
            res.json({ title: "Unauthorized", message: err.message });
            break;
        case 404:
            res.json({ title: "Not Found", message: err.message });
            break;
        case 500:
            res.json({ title: "Server Error", message: err.message });
            break;
        default: break;
    }
}


app.all("*", (req, res) => {
    res.status(404);
    throw new Error("Route not found")
})

// Third Party Middleware
app.use(logger("combined"))

app.use(errorHandler)
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})