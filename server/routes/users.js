import express from "express";
import { createUser, fetchUser } from "../controllers/user.js";
import { updateProfilePicture } from "../controllers/userSettings.js";
const router = express.Router();
router.post("/signup", createUser);
router.post("/fetchUser", fetchUser);
router.post("/updateProfileImage", updateProfilePicture);

// router.post("/", createTodos);
// router.patch("/:id", updateTodo);
// router.delete("/:id", deleteTodo);
export default router;
