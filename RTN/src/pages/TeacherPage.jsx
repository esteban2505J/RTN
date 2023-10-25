import Table from "../components/Teacher/Table";
import React, { useState } from "react";
import {
  Button,
  Card,
  Input,
  CardHeader,
  CardBody,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { AiOutlineFileAdd } from "react-icons/ai";
// import { FaPlusCircle } from "react-icons/fa";
export default function TeacherPage() {
  const [examData, setExamData] = useState({
    questions: [
      {
        questionText: "",
        options: ["", ""],
      },
    ],
  });

  const [visibility, setVisivility] = useState(false);

  // const [isDisabled, setIsdisabled] = useState(false);

  // Agregar una nueva pregunta
  const addQuestion = () => {
    setExamData({
      ...examData,
      questions: [
        ...examData.questions,
        { questionText: "", type: "", options: ["", ""], corrextOption: "" },
      ],
    });
  };

  // Agregar una nueva opción de respuesta a una pregunta específica
  const addOption = (questionIndex) => {
    const updatedQuestions = [...examData.questions];
    updatedQuestions[questionIndex].options.push("");
    setExamData({
      ...examData,
      questions: updatedQuestions,
    });
  };

  const handleQuestionTextChange = (e, questionIndex) => {
    const updatedQuestions = [...examData.questions];
    updatedQuestions[questionIndex].questionText = e.target.value;
    setExamData({
      ...examData,
      questions: updatedQuestions,
    });
  };

  const hangleTypeQuestion = (value) => {
    if (value === "text")
      return (
        <>
          <Input
            type="texarea"
            placeholder="Enter an answer of questions"
          ></Input>
        </>
      );
  };

  return (
    <>
      <div>
        <section className="mt-32">
          <Card className="flex flex-col ">
            <CardHeader>
              <h1 className="mr-4">Create a new exam</h1>
              <Button
                onClick={() => {
                  setVisivility(!visibility);
                }}
              >
                {" "}
                New
                <AiOutlineFileAdd />
              </Button>
            </CardHeader>

            <CardBody className="transition-all">
              <div className="">
                <h2 className="mb-3">Add a new item</h2>
                <div className={visibility ? "invisible" : ""}>
                  <form action="" className=" flex flex-col gap-3">
                    <Input
                      type="text"
                      placeholder="Enter the body of your question"
                      label="Text"
                    ></Input>
                    <Select
                      variant="under"
                      label="Select a type of quentions"
                      className="max-w-xs"
                      name="type"
                    >
                      <SelectItem>text</SelectItem>
                      <SelectItem>option</SelectItem>
                      <SelectItem>false or true</SelectItem>
                      {hangleTypeQuestion()}
                    </Select>
                  </form>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>
        <section className="mt-10">
          <Table />
        </section>
      </div>
    </>
  );
}
