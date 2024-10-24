import PropTypes from "prop-types";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";

const RootLayout = () => {
  const location = useLocation();
  const homePage = location.pathname === "/";

  return (
    <>
      {!homePage && <Header />}
      <Outlet />
    </>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node,
};

export default RootLayout;
