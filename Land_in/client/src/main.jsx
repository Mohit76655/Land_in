import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-fcgzs4kgouncxmyb.us.auth0.com"
      clientId="1aMs72WA2N64hOHIeU4xa74xEgxPSAVG"
      authorizationParams={{
        redirect_uri: "https://land-in-pi.vercel.app",
        audience: "http://localhost:8000",
      }}
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
