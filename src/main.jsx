import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import AuthProvider from "./providers/AuthProvider";
import TasksProviders from "./providers/TasksProviders";
import router from "./routes/Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <TasksProviders>
          <RouterProvider router={router} />
          <ToastContainer position="bottom-right" />
        </TasksProviders>
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
