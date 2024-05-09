import express from "express";
import { Login, Logout, Register } from "../controllers/user.js";

const router = express.Router();

// Route for user registration
router.route("/register").post(Register);

// Route for user login
router.route("/login").post(Login);

// Route for user logout
router.route("/logout").get(Logout);

export default router;
