import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import Field from "../../components/Field";
import PageTitle from "../../components/PageTitle";
import PrimaryButton from "../../components/PrimaryButton";
import useTasks from "../../hooks/useTasks";

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, setTasks } = useTasks();

  const existingTask = tasks.find((item) => item.id === id);

  const [task, setTask] = useState({
    ...existingTask,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleUpdateTask = (event) => {
    event.preventDefault();

    const updatedTasks = tasks.map((item) => (item.id === id ? task : item));

    setTasks(updatedTasks);
    toast.success("Task Updated!");
    setTimeout(() => {
      navigate("/me");
    }, 0);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <section className="py-5">
      <PageTitle pageName="Edit Task" />
      <div className="container">
        <h1 className="text-center text-4xl font-bold mb-5">Edit Task</h1>
        <form onSubmit={handleUpdateTask}>
          <div className="flex gap-6 flex-wrap">
            <div className="w-full md:w-[48%]">
              <Field
                htmlFor="title"
                label="Title"
                inputType="text"
                inputName="title"
                inputID="title"
                placeholder="Enter The Task Title"
                value={task.title}
                onChange={handleChange}
              />
            </div>

            <div className="w-full md:w-[48%]">
              <Field
                htmlFor="imageURL"
                label="Cover Image URL"
                inputType="url"
                inputName="imageURL"
                inputID="imageURL"
                placeholder="Enter The Cover Image URL"
                value={task.imageURL}
                onChange={handleChange}
              />
            </div>

            <div className="w-full md:w-[80%]">
              <label htmlFor="description" className="font-semibold text-lg">
                Description
              </label>
              <textarea
                value={task.description}
                onChange={handleChange}
                name="description"
                id="description"
                className="p-2 rounded border border-gray-400 w-full outline-none"
                placeholder="Enter The Task Description"
              ></textarea>
            </div>

            <div>
              <div>
                <label htmlFor="hierarchy" className="font-semibold text-lg">
                  Hierarchy
                </label>
              </div>
              <select
                name="hierarchy"
                value={task.hierarchy}
                onChange={handleChange}
                className="bg-black text-white font-medium text-lg p-2 rounded-md w-full"
              >
                <option value="" disabled>
                  Select The Hierarchy
                </option>
                <option value="Medium">Medium</option>
                <option value="Important">Important</option>
              </select>
            </div>
          </div>
          <div className="text-center mt-4">
            <PrimaryButton buttonName="Update Task" buttonType="submit" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditTask;
