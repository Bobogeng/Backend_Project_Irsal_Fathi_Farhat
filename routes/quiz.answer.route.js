import express from "express";
import QuizAnswerController from "../controllers/quiz.answer.controller.js";
import quizAnswerErrorHandler from "../middlewares/errorHandler/quizAnswerErrorHandler.js";
import authenticateToken from "../middlewares/authenticationToken.js";

const router = express.Router();

router.post("/", authenticateToken, QuizAnswerController.create);
router.get("/", authenticateToken, QuizAnswerController.getAll);
router.get("/:id", authenticateToken, QuizAnswerController.getOne);
router.put("/:id", authenticateToken, QuizAnswerController.update);
router.delete("/:id", authenticateToken, QuizAnswerController.delete);
router.use(quizAnswerErrorHandler);

export default router;
