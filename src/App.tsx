import React from "react";
import { clientId } from "./env";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <a
          href={`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=http://localhost:3000/callback`}
        >
          Login
        </a>
      </header>
    </div>
  );
};

export default App;
