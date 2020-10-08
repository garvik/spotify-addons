import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { Callback } from "./Callback";
import { Auth, AuthContext } from "./AuthContext";

export const App: React.FC = () => {
  const [auth, setAuth] = useState<Auth>({
    isAuthenticated: false,
    accessToken: undefined,
  });

  return (
    <BrowserRouter>
      <Routes>
        <AuthContext.Provider>
          <Route path="/" element={<Login />}></Route>
          <Route path="/callback" element={<Callback />}></Route>
        </AuthContext.Provider>
      </Routes>
    </BrowserRouter>
  );
};
