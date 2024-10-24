import { useParams } from "react-router";
import PageTitle from "../../components/PageTitle";
import useTasks from "../../hooks/useTasks";

const TaskDetail = () => {
  const { id } = useParams();
  const { tasks } = useTasks();

  const task = tasks.find((item) => item.id === id);

  return (
    <section className="py-5">
      <PageTitle pageName={task.title} />
      <div className="container">
        <img
          src={task.imageURL}
          alt={task.title}
          className="w-full h-[300px] object-cover rounded-md"
        />

        <h1 className="font-bold text-4xl my-5 flex flex-wrap gap-2 items-center justify-center">
          {task.title}{" "}
          <span className="bg-green-500 text-white p-2 rounded font-medium text-base">
            {task.hierarchy}
          </span>
        </h1>

        <p className="font-medium text-lg">{task.description}</p>
      </div>
    </section>
  );
};

export default TaskDetail;
