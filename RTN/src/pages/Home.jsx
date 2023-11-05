import React from "react";
import Login from "../components/Auth/Login";

export default function Home() {
  return (
    <>
      <div
        className="flex items-center justify-center h-screen mt-6 w-full"
        id="login"
      >
        <Login />
      </div>
    </>
  );
}
