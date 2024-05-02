import express from "express";
import QuizAnswerController from "../controllers/quiz.answer.controller.js";
import quizAnswerErrorHandler from "../middlewares/errorHandler/quizAnswerErrorHandler.js";

const router = express.Router();

router.post("/", QuizAnswerController.create);
router.get("/", QuizAnswerController.getAll);
router.get("/:id", QuizAnswerController.getOne);
router.put("/:id", QuizAnswerController.update);
router.delete("/:id", QuizAnswerController.delete);
router.use(quizAnswerErrorHandler);

export default router;
