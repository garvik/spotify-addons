import React from "react";
import { useLocation } from "react-router";

export const Callback: React.FC = () => {
  const location = useLocation();
  return <div>Callback - {location.hash}</div>;
};
