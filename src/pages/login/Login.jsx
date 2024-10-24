import { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import Field from "../../components/Field";
import PrimaryButton from "../../components/PrimaryButton";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="py-5">
      <div className="container">
        <div className="flex justify-center items-center min-h-[80vh]">
          <div>
            <h1 className="font-bold text-4xl text-center mb-5">Login Page</h1>
            <form className="w-[300px]">
              <div className="mb-3">
                <label htmlFor="email" className="font-semibold text-lg">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    className="p-2 rounded border border-gray-400 w-full outline-none"
                  />
                </div>
              </div>
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
                  {showPassword ? "Hide" : <FaRegEye />}
                </button>
              </Field>
              <div className="text-center">
                <PrimaryButton buttonType="submit" buttonName="Login" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
