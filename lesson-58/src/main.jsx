import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { GloablContextProvider } from "./context/GlobalContext.jsx";

createRoot(document.getElementById("root")).render(
  <GloablContextProvider>
    <App />
  </GloablContextProvider>
);
