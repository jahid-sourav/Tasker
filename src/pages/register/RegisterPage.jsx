import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Field from "../../components/Field";
import PageTitle from "../../components/PageTitle";
import PrimaryButton from "../../components/PrimaryButton";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <section className="py-5">
      <PageTitle pageName="Register" />
      <div className="container">
        <div className="flex justify-center items-center min-h-[80vh]">
          <div>
            <h1 className="font-bold text-4xl text-center mb-5">
              Register Page
            </h1>
            <form className="w-[300px]">
              <Field
                htmlFor="name"
                label="Name"
                inputType="text"
                inputName="name"
                inputID="name"
                placeholder="Enter Your Name"
              />

              <Field
                htmlFor="email"
                label="Email"
                inputType="email"
                inputName="email"
                inputID="email"
                placeholder="Enter Your Email"
              />

              <Field
                htmlFor="imageURL"
                label="Image URL"
                inputType="url"
                inputName="imageURL"
                inputID="imageURL"
                placeholder="Enter Your Image URL"
              />

              <Field
                htmlFor="password"
                label="Password"
                inputType={showPassword ? "text" : "password"}
                inputName="password"
                inputID="password"
                placeholder="Enter Your Password"
              >
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  type="button"
                  className="p-1 absolute top-[50%] right-0 translate-y-[-50%]"
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </Field>

              <Field
                htmlFor="confirmPassword"
                label="Confirm Password"
                inputType={showConfirmPassword ? "text" : "password"}
                inputName="confirmPassword"
                inputID="confirmPassword"
                placeholder="Enter Your Password Again"
              >
                <button
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  type="button"
                  className="p-1 absolute top-[50%] right-0 translate-y-[-50%]"
                >
                  {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </Field>

              <div className="text-center">
                <PrimaryButton buttonType="submit" buttonName="Register" />
              </div>
            </form>
            <p className="mt-4 font-semibold text-lg">
              Do You Have any Account? Please{" "}
              <Link to="/login" className="underline text-green-500">
                Login
              </Link>{" "}
              here!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
