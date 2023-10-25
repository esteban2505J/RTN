import React from "react";

import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
  CardHeader,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";

export default function Login() {
  const [selected, setSelected] = React.useState("login");
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col w-full">
        <Card className="max-w-full w-[340px]  bg-[#6b9795] flex">
          <CardBody className="overflow-auto ">
            <Tabs
              fullWidth
              size="md"
              aria-label="Tabs form"
              selectedKey={selected}
              onSelectionChange={setSelected}
              className="mb-4"
            >
              <Tab key="login" title="Login">
                <form className="flex flex-col gap-8 mt-6  h-[350px]">
                  <Input
                    isRequired
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Input
                    label="Password"
                    isRequired
                    placeholder="Enter your password"
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? (
                          <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                    type={isVisible ? "text" : "password"}
                    className="max-w-xs"
                  />
                  <p className="text-center text-small -m-6">
                    Need to create an account?{" "}
                    <Link
                      size="sm"
                      onPress={() => setSelected("sign-up")}
                      className="text-[#20db8a] shadow-sm hover: cursor-pointer"
                    >
                      Sign up
                    </Link>
                  </p>
                  <div className="mt-10 justify-end">
                    <Button
                      fullWidth
                      className="bg-[#a0ab94] "
                      onClick={() => {
                        navigate("/studentPage");
                      }}
                    >
                      Login
                    </Button>
                  </div>
                </form>
              </Tab>
              <Tab key="sign-up" title="Sign up">
                <form className="flex flex-col gap-4 h-[350px]">
                  <Select
                    label="I am"
                    placeholder="Select an Rol"
                    className="max-w-xs"
                  >
                    <SelectItem value="Teacher">Teacher</SelectItem>
                    <SelectItem value="Student">Student</SelectItem>
                  </Select>
                  <Input
                    isRequired
                    label="Name"
                    placeholder="Enter your name"
                    type="text"
                  />
                  <Input
                    isRequired
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Input
                    label="Password"
                    isRequired
                    placeholder="Enter your password"
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? (
                          <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                    type={isVisible ? "text" : "password"}
                    className="max-w-xs"
                  />
                  <p className="text-center text-small">
                    Already have an account?{" "}
                    <Link
                      size="sm"
                      onPress={() => setSelected("login")}
                      className="text-[#20db8a] shadow-lg rounded-lg hover:cursor-pointer"
                    >
                      Login
                    </Link>
                  </p>
                  <div className="flex gap-3 justify-end ">
                    <Button fullWidth className="bg-[#a0ab94] ">
                      Sign up
                    </Button>
                  </div>
                </form>
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
