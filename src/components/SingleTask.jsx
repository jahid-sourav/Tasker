import PropTypes from "prop-types";
import { FaPen } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useTasks from "../hooks/useTasks";

const SingleTask = ({ task, number }) => {
  const { tasks, setTasks } = useTasks();

  const handleDeleteTask = (task) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const filtered = tasks.filter((item) => item.id !== task.id);
        setTasks(filtered);

        localStorage.setItem("tasks", JSON.stringify(filtered));

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="p-1 bg-white mb-3 rounded-md flex justify-center items-center flex-wrap gap-3">
      {number + 1}.{" "}
      <Link
        to={`/tasks/${task.id}`}
        className="font-semibold text-lg mr-2 text-green-500"
      >
        {task.title}
      </Link>
      <div className="flex flex-wrap">
        <button
          className="text-red-600 mr-3"
          onClick={() => handleDeleteTask(task)}
        >
          <FaRegTrashCan />
        </button>
        <Link to={`/edit-task/${task.id}`} className="text-green-600">
          <FaPen />
        </Link>
      </div>
    </div>
  );
};

SingleTask.propTypes = {
  task: PropTypes.object,
  number: PropTypes.number,
};

export default SingleTask;
