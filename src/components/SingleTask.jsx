import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SingleTask = () => {
  return (
    <div className="p-1 bg-white mb-3 rounded-md flex justify-center items-center flex-wrap gap-3">
      1.{" "}
      <Link to="/me" className="font-semibold text-lg mr-2 text-green-500">
        Lorem ipsum dolor sit.
      </Link>
      <button className="text-red-600">
        <FaRegTrashCan />
      </button>
    </div>
  );
};

export default SingleTask;
