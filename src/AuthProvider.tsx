import React, { createContext, useContext } from "react";

export type Auth = {
  accessToken?: string;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<Auth>({
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
});

const AuthProvider: React.FC = () => {
  const login = () => {};
  const logout = () => {};

  return (
    <AuthContext.Provider
      value={{ login: login, logout: logout, isAuthenticated: false }}
    ></AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
};

export { AuthProvider, useAuth };
