import PropTypes from "prop-types";

const Field = ({
  htmlFor,
  label,
  inputType,
  inputName,
  inputID,
  placeholder,
  children,
  value,
  required,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={htmlFor} className="font-semibold text-lg">
        {label}
      </label>
      <div className="mt-1 relative">
        <input
          required={required}
          value={value}
          type={inputType}
          name={inputName}
          id={inputID}
          placeholder={placeholder}
          className="p-2 rounded border border-gray-400 w-full outline-none"
        />
        {children}
      </div>
    </div>
  );
};

Field.propTypes = {
  htmlFor: PropTypes.string,
  label: PropTypes.string,
  inputType: PropTypes.string,
  inputName: PropTypes.string,
  inputID: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.node,
  required: PropTypes.bool,
};

export default Field;
