import React from "react";
import { clientId } from "./env";

type SpotifyWindow = Window & { spotifyCallback: (payload: unknown) => void };

export const Login: React.FC = () => {
  const openLoginWindow = () => {
    const popup = window.open(
      `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=user-top-read&redirect_uri=http://localhost:3000/callback&show_dialog=true`,
      "Login with Spotify",
      "width=600,height=800"
    ) as SpotifyWindow;

    //@ts-expect-error
    window.spotifyCallback = (payload: unknown) => {
      alert(payload);
      popup.close();
    };
  };

  return (
    <button type="button" onClick={openLoginWindow}>
      LOGIN
    </button>
  );
};
