// Imports
import { Router } from "express";
import { validateSchema } from "../middlewars/validator.mddlewar.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

// Intance of Router
const router = new Router();

// Routes
router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logOut);
router.get("/verify", verifyToken);

export default router;
