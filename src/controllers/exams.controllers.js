import Exam from "../models/ExamsModel.js";

export const createExam = async (req, res) => {
  try {
    const { subject, questions, code, note, type } = req.body;
    const newExam = new Exam({
      subject,
      questions,
      user: req.user.id,
      code,
      note,
    });
    console.log(newExam);

    const saveExam = await newExam.save();
    return res.json(saveExam);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getExam = async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    if (!exam) return res.status(404).json({ message: "exam no found" });
    res.json(exam);
  } catch (error) {
    return res.status(405).json({ message: "exam not found" });
  }
};
export const getExams = async (req, res) => {
  try {
    const exams = await Exam.find({
      user: req.user.id,
    }).populate("user");
    res.json(exams);
  } catch (error) {
    return res.status(405).json({ message: "Exams not found" });
  }
};

export const deleteExam = async (req, res) => {
  try {
    const exam = await Exam.findByIdAndDelete(req.params.id);
    if (!exam) return res.status(404).json({ message: "exam no found" });
    res.sendStatus(204);
  } catch (error) {
    return res.status(405).json({ message: "exam not found" });
  }
};

export const updateExam = async (req, res) => {
  try {
    const exam = await Exam.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!exam) return res.status(404).json({ message: "Exam no found" });
    res.json(exam);
  } catch (error) {
    return res.status(405).json({ message: "Exam not found" });
  }
};
