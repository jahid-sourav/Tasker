import { CiDark } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-black text-white py-3">
      <div className="container">
        <div className="flex items-center justify-between">
          <NavLink to="/">
            <img src={Logo} alt="Logo" className="w-[100px]" />
          </NavLink>

          <ul className="flex items-center gap-3">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn mb-[2px] p-0 outline-none bg-transparent border-none hover:bg-transparent"
              >
                <img
                  src="https://avatars.githubusercontent.com/u/77751898"
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
                    type="button"
                    className="bg-gray-300 text-black font-semibold"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
            <li>
              <NavLink
                to="/create-task"
                className={({ isActive }) => (isActive ? "text-green-400" : "")}
              >
                Create Task
              </NavLink>
            </li>
            <li>
              <button type="button" className="text-2xl mt-1">
                <CiDark />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
