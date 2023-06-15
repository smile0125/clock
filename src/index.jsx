import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app.jsx";

// export default Clock;
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
