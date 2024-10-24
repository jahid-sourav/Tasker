import PropTypes from "prop-types";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";

const RootLayout = () => {
  const location = useLocation();
  const homePage = location.pathname === "/";
  const loginPage = location.pathname === "/login";
  const registerPage = location.pathname === "/register";

  return (
    <>
      {!homePage && !loginPage && !registerPage && <Header />}
      <Outlet />
    </>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node,
};

export default RootLayout;
