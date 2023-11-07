import { createContext, useState, useContext, useEffect } from "react";
import {
  registerRequest,
  loginRequest,
  verifyTokenRequest,
} from "../api/auth.js";

import Cookies from "js-cookie";

export const AuthContext = createContext();

export const userAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used withim an AutProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const sigUp = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error.response);
      setErrors(error.response.data);
    }
  };

  const sigIn = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res);
      setIsAuthenticated(true);
      setUser(res.data);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const logOut = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    setUser("");
  };

  useEffect(() => {
    if (errors.length >= 1) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    async function checkLogin() {
      console.log("checkLogin se está ejecutando");
      const cookies = Cookies.get();
      // console.log(cookies);
      if (!cookies.token) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
        console.log(loading);
        return;
      }
      {
        try {
          const res = await verifyTokenRequest(cookies.token);
          console.log(res);
          if (!res.data) {
            setIsAuthenticated(false);
            setLoading(false);
            return;
          }

          setIsAuthenticated(true);
          setUser(res.data);
          setLoading(false);
        } catch (error) {
          setIsAuthenticated(false);
          setUser(null);
          setLoading(false);
        }
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        sigUp,
        sigIn,
        logOut,
        isAuthenticated,
        errors,
        loading,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default userAuth;
