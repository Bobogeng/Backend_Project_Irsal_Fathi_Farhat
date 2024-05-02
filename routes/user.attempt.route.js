import express from "express";
import UserAttemptController from "../controllers/user.attempt.controller.js";
import userAttemptErrorHandler from "../middlewares/errorHandler/userAttemptErrorHandler.js";

const router = express.Router();

router.post("/", UserAttemptController.create);
router.get("/", UserAttemptController.getAll);
router.get("/:id", UserAttemptController.getOne);
router.put("/:id", UserAttemptController.update);
router.delete("/:id", UserAttemptController.delete);
router.use(userAttemptErrorHandler);

export default router;
