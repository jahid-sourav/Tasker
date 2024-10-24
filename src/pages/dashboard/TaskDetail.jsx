import PageTitle from "../../components/PageTitle";

const TaskDetail = () => {
  return (
    <section className="py-5">
      <PageTitle pageName="Task Detail" />
      <div className="container">
        <img
          src="https://media.sproutsocial.com/uploads/3a_facebook-cover-photo_labels@2x-1.png"
          alt="Cover"
          className="w-full h-[300px] object-cover rounded-md"
        />

        <h1 className="font-bold text-4xl my-5 flex flex-wrap gap-2 items-center justify-center">
          Task Detail{" "}
          <span className="bg-green-500 text-white p-2 rounded font-medium text-base">
            Medium
          </span>
        </h1>

        <p className="font-medium text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          totam obcaecati minima in molestias iusto eum, incidunt ea inventore
          sint a vitae delectus necessitatibus. Quisquam labore quis eos
          dignissimos perferendis
        </p>
      </div>
    </section>
  );
};

export default TaskDetail;
