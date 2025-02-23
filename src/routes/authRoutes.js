// src/routes/authRoutes.js

import { Router } from "express";
import { authController } from "../controllers/authController.js";

const router = Router();

// Mount the authController Router
router.use("/", authController);

export default router;