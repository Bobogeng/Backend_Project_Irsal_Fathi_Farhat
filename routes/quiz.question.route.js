import express from "express";
import QuizQuestionController from "../controllers/quiz.question.controller.js";
import quizQuestionErrorHandler from "../middlewares/errorHandler/quizQuestionErrorHandler.js";
import authenticateToken from "../middlewares/authenticationToken.js";

const router = express.Router();

router.post("/", authenticateToken, QuizQuestionController.create);
router.get("/", authenticateToken, QuizQuestionController.getAll);
router.get("/:id", authenticateToken, QuizQuestionController.getOne);
router.put("/:id", authenticateToken, QuizQuestionController.update);
router.delete("/:id", authenticateToken, QuizQuestionController.delete);
router.use(quizQuestionErrorHandler);

export default router;
