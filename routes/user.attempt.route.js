import express from "express";
import UserAttemptController from "../controllers/user.attempt.controller.js";
import userAttemptErrorHandler from "../middlewares/errorHandler/userAttemptErrorHandler.js";
import authenticateToken from "../middlewares/authenticationToken.js";

const router = express.Router();

router.post("/", authenticateToken, UserAttemptController.create);
router.get("/", authenticateToken, UserAttemptController.getAll);
router.get("/:id", authenticateToken, UserAttemptController.getOne);
router.put("/:id", authenticateToken, UserAttemptController.update);
router.delete("/:id", authenticateToken, UserAttemptController.delete);
router.use(userAttemptErrorHandler);

export default router;
