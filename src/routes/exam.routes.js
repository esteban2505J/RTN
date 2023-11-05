import { Router } from "express";
import { authToken } from "../middlewars/authToken.js";
import {
  getExam,
  getExams,
  createExam,
  updateExam,
  deleteExam,
} from "../controllers/exams.controllers.js";
import { validateSchema } from "../middlewars/validator.mddlewar.js";
import { examSchema } from "../schemas/exam.schema.js";

const router = Router();

router.get("/exams", authToken, getExams);
router.get("/exams/:id", authToken, getExam);
router.post("/exam", authToken, validateSchema(examSchema), createExam);
router.delete("/exam/:id", authToken, deleteExam);
router.put("/exam/:id", authToken, updateExam);

export default router;
