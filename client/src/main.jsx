import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "@/components/ui/sonner"
import { Provider } from "react-redux";
import App from "./App.jsx";
import { appStore } from "./app/store";
import "./index.css";
import { useLoadUserQuery } from "./features/api/authApi.js";
import LoadingSpinner from "./components/LoadingSpinner.jsx";



const Custom = ({ children }) => {
  const { isLoading } = useLoadUserQuery();
  return <>
      {isLoading?<LoadingSpinner />:<>{children}</>}

    </>;
  
};

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <Provider store={appStore}>
      <Custom>
        <App />
        <Toaster />
      </Custom>
    </Provider>
  // </StrictMode>
);