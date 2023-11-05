import React from "react";
import { useContext, createContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContex);
  if (!context) {
    throw new Error("useContext must be used within an AuthProvider");
  }
  return context;
};

export default function AuthContex() {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
