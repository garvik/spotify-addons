import { createContext } from "react";

export type Auth = {
  accessToken?: string;
  isAuthenticated: boolean;
};

export const AuthContext = createContext<Auth>({ isAuthenticated: false });
