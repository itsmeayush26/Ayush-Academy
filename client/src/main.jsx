import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "@/components/ui/sonner"
import { Provider } from "react-redux";
import App from "./App.jsx";
import { appStore } from "./app/store";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <App />
      <Toaster />
    </Provider>
  </StrictMode>
);