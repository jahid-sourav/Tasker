import { useRef, useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Field from "../../components/Field";
import PageTitle from "../../components/PageTitle";
import PrimaryButton from "../../components/PrimaryButton";
import useAuth from "../../hooks/useAuth";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { login, googleLogin, gitHubLogin, resetPassword } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef(null);

  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginUser({
      ...loginUser,
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();

    setError("");

    // Validation
    if (loginUser.password.length < 8) {
      toast.error("Please Provide an Email which has at least 8 digit!");
      return;
    }

    login(loginUser.email, loginUser.password)
      .then((result) => {
        if (!result?.user?.emailVerified) {
          toast.error("Please Verify Your Email First!");
          return;
        }
        toast.success(`User ${result?.user?.displayName} Logged In!`);
        navigate(location?.state ? location.state : "/me");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        toast.success(`User ${result.user.displayName} LoggedIn!`);
        navigate("/me");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGitHubLogin = () => {
    gitHubLogin()
      .then((result) => {
        toast.success(`User ${result.user.displayName} LoggedIn!`);
        navigate("/me");
      })
      .catch((error) => {
        setError(error.message);
        console.error("GitHub login error", error);
      });
  };

  const handleResetPassword = () => {
    const email = emailRef.current?.value;
    if (!email) {
      toast.error("Please Provide a Valid Email");
      return;
    }
    resetPassword(email)
      .then(() => {
        toast.success("Email Sent! Please check your inbox.");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <section className="py-5">
      <PageTitle pageName="Login" />
      <div className="container">
        <div className="flex justify-center items-center min-h-[80vh]">
          <div>
            <h1 className="font-bold text-4xl text-center mb-5">Login Page</h1>
            <form className="w-[300px]" onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="font-semibold text-lg">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    ref={emailRef}
                    required={true}
                    type="email"
                    name="email"
                    value={loginUser.email}
                    onChange={handleChange}
                    id="email"
                    placeholder="Enter Your Email"
                    className="p-2 rounded border border-gray-400 w-full outline-none"
                  />
                </div>
              </div>
              <Field
                required={true}
                htmlFor="password"
                label="Password"
                inputType={showPassword ? "text" : "password"}
                inputName="password"
                value={loginUser.password}
                onChange={handleChange}
                inputID="password"
                placeholder="Enter Your Password"
              >
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  type="button"
                  className="p-1 absolute top-[50%] right-0 translate-y-[-50%] outline-none"
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </Field>
              <div className="text-right mb-5">
                <button
                  onClick={handleResetPassword}
                  className="underline"
                  type="button"
                >
                  Forget Password
                </button>
              </div>
              <p className="my-2 text-red-600">{error}</p>
              <div className="text-center">
                <PrimaryButton buttonType="submit" buttonName="Login" />
              </div>
            </form>
            <p className="mt-4 font-semibold text-lg">
              Don&apos;t have an Account? Please{" "}
              <Link to="/register" className="underline text-green-500">
                Register
              </Link>{" "}
              here!
            </p>
            <div className="flex mt-5 gap-2 justify-center">
              <button
                onClick={handleGoogleLogin}
                className="bg-white dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 rounded-lg hover:bg-gray-100 duration-300 transition-colors border px-8 py-2.5"
              >
                <svg
                  className="w-5 h-5 sm:h-6 sm:w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3033_94454)">
                    <path
                      d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z"
                      fill="#EA4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3033_94454">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <button
                onClick={handleGitHubLogin}
                className="bg-white dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 rounded-lg hover:bg-gray-100 duration-300 transition-colors border px-8 py-2.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-github w-6 h-6"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
