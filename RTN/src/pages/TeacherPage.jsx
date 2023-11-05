import React, { useState } from "react";
import {
  Button,
  Card,
  Input,
  CardHeader,
  CardBody,
  CardFooter,
  Select,
  SelectItem,
} from "@nextui-org/react";
// import { AiOutlineFileAdd } from "react-icons/ai";
import { Radio, RadioGroup } from "@nextui-org/react";
import { useForm } from "react-hook-form";

// Types of  questions
const types = [
  {
    label: "Text",
    value: "text",
  },
  {
    label: "Options",
    value: "options",
  },
  {
    label: "Boolean",
    value: "boolean",
  },
];

export default function TeacherPage() {
  const [options, setOptions] = useState([]);
  const optionsArray = [...options];

  const [inputValue, setInputValue] = useState("");
  const [inputOption, setInputOption] = useState("");
  const [visibility, setVisivility] = useState(false);
  const [type, setType] = useState("text");
  const { control, handleSubmit, register, reset } = useForm(); // Usa "control" y "reset" de React Hook Form

  // Data of exam
  const [examData, setExamData] = useState({
    questions: [
      {
        questionText: "",
        options: ["", ""],
        type: "",
        answerCorrect: "",
      },
    ],
  });

  // Agregar una nueva pregunta
  const addQuestion = (data) => {
    const { bodyRequest, answer } = data;
    // console.log(data);
    setExamData({
      questions: [
        ...examData.questions,
        {
          questionText: bodyRequest,
          options: type === "options" ? optionsArray : [],
          type,
          answerCorrect: answer,
        },
      ],
    });
    console.log(examData);
  };

  const handleAddOption = () => {
    if (inputOption) {
      setOptions([...optionsArray, inputOption]); // Agrega el valor del input a la lista de opciones
      setInputOption(""); // Limpia el input
    }
  };

  const hangleTypeQuestion = () => {
    // console.log(optionsArray);

    if (type === "text") {
      return (
        <>
          <textarea
            placeholder="Ingrese una respuesta a las preguntas"
            className="w-full max-h-48 min-h-0 py-2 rounded-xl pl-2 "
          ></textarea>
        </>
      );
    }
    if (type === "boolean") {
      return (
        <>
          <div>
            <RadioGroup value={inputValue} onValueChange={setInputValue}>
              <Radio value="true">True</Radio>
              <Radio value="false">False</Radio>
            </RadioGroup>
          </div>
        </>
      );
    }
    if (type === "options") {
      return (
        <>
          <div className="lg:flex lg:flex-row lg:justify-between lg:gap-x-2">
            <Input
              type="text"
              placeholder="Add a option"
              value={inputOption}
              onChange={(e) => {
                setInputOption(e.target.value);
              }}
            ></Input>
            <Button
              color="primary"
              className="mt-3 lg:mt-0"
              onClick={handleAddOption}
            >
              {" "}
              New option
            </Button>
          </div>
          <div className="mt-3">
            <div>
              <RadioGroup value={inputValue} onValueChange={setInputValue}>
                {options.map((option, index) => (
                  <Radio value={option} key={index}>
                    {option}
                  </Radio>
                ))}
              </RadioGroup>
            </div>
          </div>
        </>
      );
    }

    return null;
  };

  const handleSendExam = () => {
    console.log("está funcionadno");
  };

  return (
    <>
      <div className="flex flex-col items-center gap-y-5 justify-center mt-14 lg:ml-14 ">
        <section className="flex-row md:w-1/2 w-5/6 mb-5">
          <div>
            <Card className=" bg-slate-400 text-slate-800 text-xl">
              <CardHeader className="text-center justify-center">
                <h1 className="mr-4 text-cyan-950 font-bold">
                  Create a new exam
                </h1>
              </CardHeader>

              <CardBody className="transition-all">
                <div className="">
                  <h2 className="mb-3">Add a new item</h2>
                  <div className={visibility ? "invisible" : ""}>
                    <form
                      className=" flex flex-col gap-5"
                      onSubmit={handleSubmit(addQuestion)}
                    >
                      <Input
                        {...register("bodyRequest", { required: true })}
                        type="text"
                        placeholder="Enter the body of your question"
                        label="Text"
                        key="bodyRequest"
                      ></Input>
                      <Select
                        // {...register("type", { required: true })}
                        label="Type"
                        placeholder="Select a type"
                        className="max-w-xs"
                        value={type}
                        onChange={(value) => {
                          setType(value.target.value); // Actualiza el tipo seleccionado
                          console.log(value.target.value);
                        }}
                      >
                        {types.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </Select>

                      {/* options, boolean or textArea */}
                      <div>{hangleTypeQuestion()}</div>

                      {/*  correct answer*/}
                      <Input
                        {...register("answer", { required: true })}
                        className=""
                        placeholder="added correct answer"
                      ></Input>

                      {/* Button send a request a formulary */}
                      <div className=" flex justify-center items-center">
                        <Button
                          color="primary"
                          className="hover:bg-success"
                          type="submit"
                        >
                          New item
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>

        <section className="flex-row md:w-1/2 w-5/6 mb-20">
          <Card className=" bg-slate-400 text-slate-800 text-xl w-full">
            <CardHeader className="text-center justify-center">
              <h1 className="text-cyan-950 font-bold">Preview Exam</h1>
            </CardHeader>
            <CardBody>
              <div className="mb-5 ">
                {examData.questions.map((question, index) => (
                  <div key={index} className="mb-5 text-slate-950">
                    <div className="flex gap-x-2">
                      <p>{index !== 0 ? index + ")" : ""}</p>
                      <p className="mb-3">{question.questionText}</p>
                    </div>
                    {question.type === "text" && (
                      <textarea
                        placeholder="Escribe tu respuesta..."
                        onChange={(e) => {
                          const newQuestions = [...examData.questions];
                          newQuestions[index].answerCorrect = e.target.value;
                          setExamData({ questions: newQuestions });
                        }}
                        className="w-full max-h-48 min-h-0 py-2 rounded-xl pl-2 "
                      />
                    )}
                    {question.type === "boolean" && (
                      <RadioGroup
                        value={question.answerCorrect}
                        onValueChange={(value) => {
                          const newQuestions = [...examData.questions];
                          newQuestions[index].answerCorrect = value;
                          setExamData({ questions: newQuestions });
                        }}
                      >
                        <Radio value="true">True</Radio>
                        <Radio value="false">False</Radio>
                      </RadioGroup>
                    )}
                    {question.type === "options" && (
                      <RadioGroup
                        value={question.answerCorrect}
                        onValueChange={(value) => {
                          const newQuestions = [...examData.questions];
                          newQuestions[index].answerCorrect = value;
                          setExamData({ questions: newQuestions });
                        }}
                      >
                        {question.options.map((option, optionIndex) => (
                          <Radio key={optionIndex} value={option}>
                            {option}
                          </Radio>
                        ))}
                      </RadioGroup>
                    )}
                  </div>
                ))}
                <div className="justify-center flex items-center mt-5">
                  <Button
                    color="primary"
                    className="hover:bg-success"
                    onClick={handleSendExam}
                  >
                    Save Exam
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>
      </div>
    </>
  );
}
