import express from "express";
import QuizCategoryController from "../controllers/quiz.category.controller.js";
import quizCategoryErrorHandler from "../middlewares/errorHandler/quizCategoryErrorHandler.js";

const router = express.Router();

router.post("/", QuizCategoryController.create);
router.get("/", QuizCategoryController.getAll);
router.get("/:id", QuizCategoryController.getOne);
router.put("/:id", QuizCategoryController.update);
router.delete("/:id", QuizCategoryController.delete);
router.use(quizCategoryErrorHandler);

export default router;
