import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

const PageTitle = ({ pageName }) => {
  return (
    <Helmet>
      <title>{pageName} • Tasker App</title>
    </Helmet>
  );
};

PageTitle.propTypes = {
  pageName: PropTypes.string,
};

export default PageTitle;
