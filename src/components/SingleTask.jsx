import { FaPen } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SingleTask = () => {
  return (
    <div className="p-1 bg-white mb-3 rounded-md flex justify-center items-center flex-wrap gap-3">
      1.{" "}
      <Link
        to="/task-detail"
        className="font-semibold text-lg mr-2 text-green-500"
      >
        Lorem ipsum dolor sit.
      </Link>
      <div className="flex flex-wrap">
        <button className="text-red-600 mr-3">
          <FaRegTrashCan />
        </button>
        <Link to="/edit-task" className="text-green-600">
          <FaPen />
        </Link>
      </div>
    </div>
  );
};

export default SingleTask;
