import React from "react";
import { useLocation } from "react-router";
import { useAuth } from "./AuthProvider";

export const Callback: React.FC = () => {
  const location = useLocation();
  const { login } = useAuth();
  const hashArguments = location.hash
    .substring(1)
    .split("&")
    .map((argument) => {
      const keyValuePair = argument.split("=");
      return { key: keyValuePair[0], value: keyValuePair[1] };
    });

  const accessToken = hashArguments.find(
    (argument) => (argument.key = "access-token")
  )?.value;

  if (!accessToken) {
    throw new Error("Access token is incorrect");
  }

  login(accessToken);

  return <div></div>;
};
