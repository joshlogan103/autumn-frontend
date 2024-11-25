import { useState, useEffect, createContext } from "react";
import { createUser, loginUser, tokenRefresh } from "../services/serviceRoutes/userServices";
import { getToken, setToken, removeToken } from "../services/apiToken";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export const AuthContextComponent = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeContext = async () => {
      try {
        const token = getToken();
        if (token) {
          const isUserValid = await tokenRefresh();
          if (isUserValid.status === 200) {
            setIsUserLoggedIn(true);
            setToken(isUserValid.data.access);
          } else {
            setIsUserLoggedIn(false);
            removeToken();
          }
        }
      } catch (error) {
        if (error.response?.status === 401) {
          console.log("not logged in");
          setIsUserLoggedIn(false);
          removeToken();
        } else {
          console.error("initialization error", error);
        }
      } finally {
        setAuthLoading(false);
      }
    };
    initializeContext();
  }, []);

  const loginUserAuth = async (payload) => {
    try {
      const response = await loginUser(payload);
      if (response.status === 200) {
        console.log(response);
        setIsUserLoggedIn(true);
        setToken(response.data.access);
        console.log(
          `successfully logged in user ${response.data.user.username}`
        );
        navigate("/browse");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createUserAuth = async (payload) => {
    try {
      const response = await createUser(payload);
      if (response.status === 200) {
        setIsUserLoggedIn(true);
        setToken(response.data.access);
        console.log(
          `successfully registered user ${response.data.user.username}`
        );
        navigate("/browse");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    removeToken();
    setIsUserLoggedIn(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        isUserLoggedIn,
        setIsUserLoggedIn,
        authLoading,
        loginUserAuth,
        createUserAuth,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
