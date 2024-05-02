import express from "express";
import UserAnswerController from "../controllers/user.answer.controller.js";
import userAnswerErrorHandler from "../middlewares/errorHandler/userAnswerErrorHandler.js";

const router = express.Router();

router.post("/", UserAnswerController.create);
router.get("/", UserAnswerController.getAll);
router.get("/:id", UserAnswerController.getOne);
router.put("/:id", UserAnswerController.update);
router.delete("/:id", UserAnswerController.delete);
router.use(userAnswerErrorHandler);

export default router;
