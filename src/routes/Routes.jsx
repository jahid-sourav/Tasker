import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import CreateTask from "../pages/dashboard/AddTask";
import EditTask from "../pages/dashboard/EditTask";
import Profile from "../pages/dashboard/Profile";
import TaskDetail from "../pages/dashboard/TaskDetail";
import ErrorPage from "../pages/errorPage/ErrorPage";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";
import RegisterPage from "../pages/register/RegisterPage";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
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
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/create-task",
        element: (
          <PrivateRoutes>
            <CreateTask />
          </PrivateRoutes>
        ),
      },
      {
        path: "/tasks/:id",
        element: (
          <PrivateRoutes>
            <TaskDetail />
          </PrivateRoutes>
        ),
      },
      {
        path: "/edit-task/:id",
        element: (
          <PrivateRoutes>
            <EditTask />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
