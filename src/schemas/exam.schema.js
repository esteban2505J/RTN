import { z } from "zod";

export const examSchema = z.object({
  subject: z.string({
    required_error: "subject is required",
  }),
  questions: z.array(
    z.object({
      questionText: z.string(),
      options: z.array(z.string()),
      type: z.string(),
      answerCorrect: z.string(),
      nota: z.string(),
      valor: z.number(),
    })
  ),
  code: z.string(),
  note: z.number(),
});
