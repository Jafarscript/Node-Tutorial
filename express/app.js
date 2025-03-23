import express from "express";
import userRouter from "./routers/userRoutes.js";// Import the router

const app = express();

app.use(express.json()); // Built-in middleware for JSON

// Use the userRoutes for any request starting with "/users"
app.use("/users", userRouter);

app.get("/", (req, res) => {
    res.send("Welcome to the Home Page");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});
