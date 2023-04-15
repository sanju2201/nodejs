const writeToFile = require("../util/write-to-file");

module.exports = (req, res) => {
    let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1)
    console.log(baseUrl)
    let id = req.url.split("/")[3];

    const regexV4 = new RegExp(/[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/);

    if (!regexV4.test(id)) {
        res.writeHead(400, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ title: "Validation is Failed", message: "UUID is not valid" }))
    } else if (baseUrl === "/api/movies/" && regexV4.test(id)) {
        const index = req.movies.findIndex((movie) => {
            return movie.id === id;
        });
        if (index === -1) {
            res.statusCode = 404;
            res.write(JSON.stringify({ title: "Not Found", message: "Movie Not Found" }))
            res.end()
        } else {
            req.movies.splice(index, 1);
            writeToFile(req.movies);
            res.writeHead(204, { "Content-Type": "application/json" })
            res.end(JSON.stringify(req.movies))
        }

    }
    else {
        res.writeHead(404, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ title: "Not Found", message: "Route Not Found" }))
    }

}