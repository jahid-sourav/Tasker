import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Logo from "../assets/logo.png";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success(`User ${user?.displayName} LoggedOut!`);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <header className="bg-black text-white py-3">
      <div className="container">
        <div className="flex items-center justify-between">
          <NavLink to="/">
            <img src={Logo} alt="Logo" className="w-[100px]" />
          </NavLink>

          <ul className="flex items-center gap-3">
            {loading ? (
              <span className="loading loading-spinner loading-xs"></span>
            ) : (
              user && (
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn mb-[2px] p-0 outline-none bg-transparent border-none hover:bg-transparent"
                  >
                    <img
                      referrerPolicy="no-referrer"
                      src={user?.photoURL}
                      alt="User"
                      className="h-[30px] w-[30px] rounded-full"
                    />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu rounded-box z-[1] w-[100px] bg-black/[.5] text-white  shadow"
                  >
                    <li className="mb-2">
                      <NavLink
                        to="/me"
                        className={({ isActive }) =>
                          `${isActive ? "text-green-400" : ""} font-semibold`
                        }
                      >
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        type="button"
                        className="bg-gray-300 text-black font-semibold"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )
            )}
            <li>
              <NavLink
                to="/create-task"
                className={({ isActive }) => (isActive ? "text-green-400" : "")}
              >
                Create Task
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
