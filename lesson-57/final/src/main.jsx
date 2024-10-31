import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { GlobalContextProvider } from "./context/GlobalContext.jsx";

createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>
);
