import mongoose from "mongoose";
import ExamsModel from "./ExamsModel";

// schema of user

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    roll: { type: String, required: true },
    notes: {
      exam: String,
      note: Number,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    courses: [{ type: String }],
    exams: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "exams", // Debe coincidir con el nombre del modelo de Exams
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("user", userSchema);
