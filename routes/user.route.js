import express from "express";
import UserController from "../controllers/user.controller.js";
import userErrorHandler from "../middlewares/errorHandler/userErrorHandler.js";
import authenticateToken from "../middlewares/authenticationToken.js";

const router = express.Router();

router.get("/", authenticateToken, UserController.getAll);
router.get("/:id", authenticateToken, UserController.getOne);
router.put("/:id", authenticateToken, UserController.update);
router.delete("/:id", authenticateToken, UserController.delete);
router.use(userErrorHandler);

export default router;
