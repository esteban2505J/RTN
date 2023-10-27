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
// import { AiOutlineFileAdd } from "react-icons/ai";
import { Radio, RadioGroup } from "@nextui-org/react";

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

  const [inputValue, setInputValue] = useState("");
  const [inputOption, setInputOption] = useState("");

  // Data of exam
  const [examData, setExamData] = useState({
    questions: [
      {
        questionText: "",
        options: ["", ""],
      },
    ],
  });
  const [visibility, setVisivility] = useState(false);

  const [type, setType] = useState("");

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

  const handleAddOption = () => {
    if (inputOption) {
      setOptions([...options, inputOption]); // Agrega el valor del input a la lista de opciones
      setInputOption(""); // Limpia el input
    }
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

  const hangleTypeQuestion = () => {
    if (type === "text") {
      return (
        <>
          <Input
            type="texarea"
            placeholder="Enter an answer of questions"
          ></Input>
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
          <div className="lg:flex lg:flex-row lg:justify-between lg:gap-x-2 ">
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
            <div>
              {options.map((option, index) => (
                <div key={index}>{option}</div>
              ))}
            </div>
          </div>
        </>
      );
    }

    return null;
  };

  return (
    <>
      <div
        className="flex flex-row justify-center mt-14 lg:ml-14
      "
      >
        <section className="flex-row md:w-1/2 w-5/6">
          <div>
            <Card className=" bg-slate-400 text-slate-800 text-xl">
              <CardHeader>
                <h1 className="mr-4">Create a new exam</h1>
              </CardHeader>

              <CardBody className="transition-all">
                <div className="">
                  <h2 className="mb-3">Add a new item</h2>
                  <div className={visibility ? "invisible" : ""}>
                    <form action="" className=" flex flex-col gap-5">
                      <Input
                        type="text"
                        placeholder="Enter the body of your question"
                        label="Text"
                      ></Input>
                      <Select
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

                      <div>{hangleTypeQuestion()}</div>
                    </form>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
