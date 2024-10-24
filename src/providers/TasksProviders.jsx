import PropTypes from "prop-types";
import { useState } from "react";
import { TasksContext } from "../context";

const TasksProviders = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};

TasksProviders.propTypes = {
  children: PropTypes.node,
};

export default TasksProviders;
