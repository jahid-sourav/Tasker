import PropTypes from "prop-types";

const PrimaryButton = ({ buttonType, buttonName }) => {
  return (
    <button
      type={buttonType}
      className="px-3 py-2 rounded-md bg-black text-white text-lg font-semibold"
    >
      {buttonName}
    </button>
  );
};

PrimaryButton.propTypes = {
  buttonType: PropTypes.string,
  buttonName: PropTypes.string,
};

export default PrimaryButton;
