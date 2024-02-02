import express from "express";
import {
	getAllUsers,
	createNewUsers,
	updateUser
} from "../controller/users.js";

const router = express.Router();

const UserController = {
	getAllUsers,
	createNewUsers,
	updateUser,
};

// create - post
router.post("/", UserController.createNewUsers);

// read - get
router.get("/", UserController.getAllUsers);

// update - patch
router.patch("/:id", UserController.updateUser);

export default router;
