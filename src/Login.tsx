import React from "react";
import { clientId } from "./env";

export const Login: React.FC = () => {
  return (
    <a
      href={`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=http://localhost:3000/callback`}
    >
      Login
    </a>
  );
};
