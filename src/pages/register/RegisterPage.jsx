import { sendEmailVerification, updateProfile } from "firebase/auth";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Field from "../../components/Field";
import PageTitle from "../../components/PageTitle";
import PrimaryButton from "../../components/PrimaryButton";
import useAuth from "../../hooks/useAuth";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const [registerUser, setRegisterUser] = useState({
    name: "",
    email: "",
    imageURL: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegisterUser({
      ...registerUser,
      [name]: value,
    });
  };

  const handleRegister = (event) => {
    event.preventDefault();

    setError("");

    // Validation
    if (registerUser.password.length < 8) {
      toast.error("Please Give Min. 8 Digit Password!");
      return;
    } else if (registerUser.password !== registerUser.confirmPassword) {
      toast.error("Password and Confirm Password does not match!");
      return;
    }

    register(registerUser.email, registerUser.password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: registerUser.name,
          photoURL: registerUser.imageURL,
        })
          .then(() => {
            navigate("/login");
          })
          .catch((error) => {
            setError(error.message);
          });
        sendEmailVerification(result.user)
          .then(() => {
            toast.warning("Please Verify Your Email");
          })
          .catch((error) => setError(error.message));
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <section className="py-5">
      <PageTitle pageName="Register" />
      <div className="container">
        <div className="flex justify-center items-center min-h-[80vh]">
          <div>
            <h1 className="font-bold text-4xl text-center mb-5">
              Register Page
            </h1>
            <form className="w-[300px]" onSubmit={handleRegister}>
              <Field
                required={true}
                htmlFor="name"
                label="Name"
                inputType="text"
                inputName="name"
                value={registerUser.name}
                onChange={handleChange}
                inputID="name"
                placeholder="Enter Your Name"
              />

              <Field
                required={true}
                htmlFor="email"
                label="Email"
                inputType="email"
                inputName="email"
                value={registerUser.email}
                onChange={handleChange}
                inputID="email"
                placeholder="Enter Your Email"
              />

              <Field
                required={true}
                htmlFor="imageURL"
                label="Image URL"
                inputType="url"
                inputName="imageURL"
                value={registerUser.imageURL}
                onChange={handleChange}
                inputID="imageURL"
                placeholder="Enter Your Image URL"
              />

              <Field
                required={true}
                htmlFor="password"
                label="Password"
                inputType={showPassword ? "text" : "password"}
                inputName="password"
                value={registerUser.password}
                onChange={handleChange}
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
                required={true}
                htmlFor="confirmPassword"
                label="Confirm Password"
                inputType={showConfirmPassword ? "text" : "password"}
                inputName="confirmPassword"
                value={registerUser.confirmPassword}
                onChange={handleChange}
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
              <p className="my-2 text-red-500">{error}</p>
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
