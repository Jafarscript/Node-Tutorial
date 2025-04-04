import express from "express";
import { createUser, deleteUser, getUserbyId, getUsers, updateUser } from "../controllers/userController.js";


const router = express.Router()

router.post("/", createUser);

router.get("/", getUsers);
router.get("/:id", getUserbyId);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;