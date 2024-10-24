import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import TasksProviders from "./providers/TasksProviders";
import router from "./routes/Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <TasksProviders>
        <RouterProvider router={router} />
        <ToastContainer position="bottom-right" />
      </TasksProviders>
    </HelmetProvider>
  </StrictMode>
);
