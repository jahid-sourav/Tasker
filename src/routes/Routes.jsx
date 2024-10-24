import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import CreateTask from "../pages/dashboard/AddTask";
import EditTask from "../pages/dashboard/EditTask";
import Profile from "../pages/dashboard/Profile";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";
import RegisterPage from "../pages/register/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/me",
        element: <Profile />,
      },
      {
        path: "/create-task",
        element: <CreateTask />,
      },
      {
        path: "/edit-task",
        element: <EditTask />,
      },
    ],
  },
]);

export default router;
