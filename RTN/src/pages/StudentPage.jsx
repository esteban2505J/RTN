import React from "react";
import { Input, Button, Card, CardBody, CardHeader } from "@nextui-org/react";

export default function StudentPage() {
  return (
    <>
      <div className="flex flex-col">
        <div className="">
          <Card className="bg-[#e5e5e5] ">
            <CardHeader className="text-center justify-center">
              <h1 className="text-xl text-slate-700">Enter an exam</h1>
            </CardHeader>
            <CardBody>
              <form action="" className="flex flex-col gap-4">
                <Input
                  type="text"
                  label="Code"
                  placeholder="Enter your exam code"
                ></Input>
                <Input
                  type="text"
                  label="Course"
                  placeholder="Enter your course"
                ></Input>

                <Button color="primary">Send</Button>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}
