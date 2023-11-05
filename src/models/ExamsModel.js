import mongoose from "mongoose";

// Schema of exams

const examsSchema = new mongoose.Schema(
  {
    subject: { type: String, required: true, trim: true },
    questions: [
      {
        questionText: String,
        options: [String],
        type: String,
        answerCorrect: String,
        nota: String,
      },
    ],
    code: {
      type: String,
      required: true,
      unique: true,
    },
    note: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("exams", examsSchema);
