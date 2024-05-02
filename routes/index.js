import express from "express";
import HomeController from "../controllers/home.controller.js";
import authRoutes from "./auth.route.js";
import userRoutes from "./user.route.js";
import quizRoutes from "./quiz.route.js";
import quizCategoryRoutes from "./quiz.category.route.js";
import quizQuestionRoutes from "./quiz.question.route.js";
import quizAnswerRoutes from "./quiz.answer.route.js";
import userAttemptRoutes from "./user.attempt.route.js";
import userAnswerRoutes from "./user.answer.route.js";
import errorHandler from "../middlewares/errorHandler/errorHandler.js";

const routes = express.Router();

routes.get("/", HomeController.getWelcome);
routes.get("/author", HomeController.getAuthor);
routes.use("/auth", authRoutes);
routes.use("/user", userRoutes);
routes.use("/quiz", quizRoutes);
routes.use("/quiz-category", quizCategoryRoutes);
routes.use("/quiz-question", quizQuestionRoutes);
routes.use("/quiz-answer", quizAnswerRoutes);
routes.use("/user-attempt", userAttemptRoutes);
routes.use("/user-answer", userAnswerRoutes);

export default routes;
