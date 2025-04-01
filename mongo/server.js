import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routers/userRouter.js";
import requestLogger from "./middleware.js/logger.js";
import errorHandler from "./middleware.js/errorHandler.js";

dotenv.config()


const app = express();
mongoose.connect(process.env.DB_URL)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log("Error connecting to MongoDB", err);
});

app.use(express.json());
app.use(requestLogger);

app.use("/users", router);
app.use(errorHandler)




app.listen(8080, () => {
    console.log('App running at http://localhost:8080/')
})