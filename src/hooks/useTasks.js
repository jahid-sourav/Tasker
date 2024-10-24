import { useContext } from "react";
import { TasksContext } from "../context";

const useTasks = () => {
  return useContext(TasksContext);
};

export default useTasks;
