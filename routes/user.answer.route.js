import express from "express";
import UserAnswerController from "../controllers/user.answer.controller.js";
import userAnswerErrorHandler from "../middlewares/errorHandler/userAnswerErrorHandler.js";
import authenticateToken from "../middlewares/authenticationToken.js";

const router = express.Router();

router.post("/", authenticateToken, UserAnswerController.create);
router.get("/", authenticateToken, UserAnswerController.getAll);
router.get("/:id", authenticateToken, UserAnswerController.getOne);
router.put("/:id", authenticateToken, UserAnswerController.update);
router.delete("/:id", authenticateToken, UserAnswerController.delete);
router.use(userAnswerErrorHandler);

export default router;
