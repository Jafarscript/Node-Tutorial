const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/api/users") {
        const users = [
            { id: 1, name: "Alice" },
            { id: 2, name: "Bob" },
        ];
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(users));
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "404 Not Found" }));
    }
});

server.listen(3000, () => {
    console.log("API running at http://localhost:3000/api/users");
});
