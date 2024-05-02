import express from "express";
import UserController from "../controllers/user.controller.js";
import userErrorHandler from "../middlewares/errorHandler/userErrorHandler.js";

const router = express.Router();

router.get("/", UserController.getAll);
router.get("/:id", UserController.getOne);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.delete);
router.use(userErrorHandler);

export default router;
