import express from 'express'

const app = express()

// Custom Middleware - Logs requests
const logger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Move to the next middleware/route
};

// Apply middleware to all routes
app.use(logger);

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});


app.listen(3000, () => {
    console.log("App running at http://localhost:3000/")
})