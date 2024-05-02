import express from "express";
import AuthController from "../controllers/auth.controller.js";
import authErrorHandler from "../middlewares/errorHandler/authErrorHandler.js";

const router = express.Router();

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);
router.use(authErrorHandler);

export default router;
