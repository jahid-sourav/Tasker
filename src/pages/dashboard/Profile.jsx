import { Link } from "react-router-dom";
import Field from "../../components/Field";
import PageTitle from "../../components/PageTitle";
import PrimaryButton from "../../components/PrimaryButton";
import SingleTask from "../../components/SingleTask";
import useTasks from "../../hooks/useTasks";

const Profile = () => {
  const { tasks } = useTasks();

  return (
    <section className="py-5">
      <PageTitle pageName="Profile" />
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-5">Profile Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-3">
              <div className="flex justify-center">
                <img
                  src="https://avatars.githubusercontent.com/u/77751898"
                  alt="User"
                  className="h-[200px] w-[200px] rounded-full"
                />
              </div>
            </div>
            <form className="w-min-[300px] md:w-full">
              <Field
                htmlFor="name"
                label="Name"
                inputType="text"
                inputName="name"
                inputID="name"
                value="Jahid"
              />
              <Field
                htmlFor="imageURL"
                label="Image URL"
                inputType="url"
                inputName="imageURL"
                inputID="imageURL"
                value="Bhai URL EDIT Koren"
              />
              <div className="text-center">
                <PrimaryButton
                  buttonType="submit"
                  buttonName="Update Profile"
                />
              </div>
            </form>
          </div>
          <div>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold">
                Total Tasks : {tasks.length}
              </h2>
              <div className="mt-5">
                <Link
                  to="/create-task"
                  className="text-green-400 bg-black px-3 py-2 rounded-md text-lg font-semibold"
                >
                  Create A Task
                </Link>
              </div>
            </div>
            {tasks.length > 0 && (
              <div className="p-2 rounded bg-slate-400 border border-blue-300">
                {tasks.map((task, index) => (
                  <SingleTask key={task.id} task={task} number={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
