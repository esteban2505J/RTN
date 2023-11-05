import React from "react";
import Table from "../components/Teacher/Table";

export default function TablePage() {
  return (
    <>
      <div className="flex flex-row justify-center mt-14 lg:ml-14">
        <section className="justify-center items-center flex flex-col w-1/2">
          <Table></Table>
        </section>
      </div>
    </>
  );
}
