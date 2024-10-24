import Field from "../../components/Field";
import PageTitle from "../../components/PageTitle";
import PrimaryButton from "../../components/PrimaryButton";

const EditTask = () => {
  return (
    <section className="py-5">
      <PageTitle pageName="Edit Task" />
      <div className="container">
        <h1 className="text-center text-4xl font-bold mb-5">Edit Task</h1>
        <form>
          <div className="flex gap-6 flex-wrap">
            <div className="w-full md:w-[48%]">
              <Field
                htmlFor="title"
                label="Title"
                inputType="text"
                inputName="title"
                inputID="title"
                placeholder="Enter The Task Title"
                value="Beta Value De"
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
                value="Beta Value De"
              />
            </div>

            <div className="w-full md:w-[80%]">
              <label htmlFor="description" className="font-semibold text-lg">
                Description
              </label>
              <textarea
                value="Beta Value De"
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
                className="bg-black text-white font-medium text-lg p-2 rounded-md w-full"
              >
                <option value="" selected disabled>
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
