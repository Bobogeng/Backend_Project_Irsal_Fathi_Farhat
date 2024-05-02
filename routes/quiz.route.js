import express from "express";
import QuizController from "../controllers/quiz.controller.js";
import quizErrorHandler from "../middlewares/errorHandler/quizErrorHandler.js";
import authenticateToken from "../middlewares/authenticationToken.js";

const router = express.Router();

router.post("/", authenticateToken, QuizController.create);
router.get("/", authenticateToken, QuizController.getAll);
router.get("/:id", authenticateToken, QuizController.getOne);
router.put("/:id", authenticateToken, QuizController.update);
router.delete("/:id", authenticateToken, QuizController.delete);
router.use(quizErrorHandler);

export default router;
