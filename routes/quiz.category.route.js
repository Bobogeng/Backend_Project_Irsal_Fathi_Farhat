import express from "express";
import QuizCategoryController from "../controllers/quiz.category.controller.js";
import quizCategoryErrorHandler from "../middlewares/errorHandler/quizCategoryErrorHandler.js";
import authenticateToken from "../middlewares/authenticationToken.js";

const router = express.Router();

router.post("/", authenticateToken, QuizCategoryController.create);
router.get("/", authenticateToken, QuizCategoryController.getAll);
router.get("/:id", authenticateToken, QuizCategoryController.getOne);
router.put("/:id", authenticateToken, QuizCategoryController.update);
router.delete("/:id", authenticateToken, QuizCategoryController.delete);
router.use(quizCategoryErrorHandler);

export default router;
