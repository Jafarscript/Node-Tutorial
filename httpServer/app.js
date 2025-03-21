const http = require("http");

const server = http.createServer((req, res) => {
    
    if (req.url === "/"){
        res.writeHead(200, {"Content-Type" : "text/plain"});
        return res.end("Welcome to the Home page")
    } 
    
    if (req.url === "/about"){
        res.writeHead(200, {"Content-Type" : "text/plain"});
        return res.end("This is the About Page")
    }

    res.writeHead(404, {"Content-Type" : "text/plain"}),
        res.end("404 Not found")
})


server.listen(3000, () => {
    console.log("Server running at PORT:3000")
})