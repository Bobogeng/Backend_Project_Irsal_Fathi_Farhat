import express from "express";
import QuizQuestionController from "../controllers/quiz.question.controller.js";
import quizQuestionErrorHandler from "../middlewares/errorHandler/quizQuestionErrorHandler.js";

const router = express.Router();

router.post("/", QuizQuestionController.create);
router.get("/", QuizQuestionController.getAll);
router.get("/:id", QuizQuestionController.getOne);
router.put("/:id", QuizQuestionController.update);
router.delete("/:id", QuizQuestionController.delete);
router.use(quizQuestionErrorHandler);

export default router;
