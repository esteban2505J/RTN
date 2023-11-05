import mongoose from "mongoose";

const examSchema = new mongoose.Schema(
  {
    subject: { type: String, required: true, trim: true },
    questions: [
      {
        questionText: { type: String, required: true },
        options: [String],
        type: { type: String, required: true },
        answerCorrect: { type: String, required: true },
        nota: { type: String, required: true },
        valor: { type: Number, required: true },
      },
    ],
    code: {
      type: String,
      required: true,
      unique: true,
    },
    note: {
      type: Number,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user", // Asegúrate de que coincida con el nombre del modelo de usuario
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Exam", examSchema);
