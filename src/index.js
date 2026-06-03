import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const style = document.createElement("style");
style.textContent = `
  :root {
    --green: #2d6a4f;
    --light: #f1faee;
    --gray: #555;
    --dark: #1b1b1b;
    --border: #ddd;
    --yellow: #fbbf24;
  }
  * { margin:0; padding:0; box-sizing:border-box; }
  body { font-family: Georgia, serif; background:#fafafa; color:#222; line-height:1.6; }
  a { text-decoration:none; color:inherit; }
  .container { max-width:1200px; margin:auto; padding:0 1rem; }
`;
document.head.appendChild(style);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);