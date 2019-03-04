import React from 'react';
import classnames from "classnames";
import PropTypes from "prop-types";

const FormInputField = ({name, placeholder, value, label, error, type, onChange, labelinfo, isDisabled}) => {
  return (
    <div className={classnames("form-group", {"has-error": error})}>
      <label>{label} <small className="text-muted">{labelinfo}</small></label>
      <input 
      	type={type}
      	name={name}
      	onChange={onChange}
      	className="form-control"
      	placeholder={placeholder}
      	value={value}
      	disabled={isDisabled}
      />
      {error && (<small className="help-block text-muted">{error}</small>)}
    </div>
  );
};

FormInputField.defaultProps = {
	type: "text"
}

FormInputField.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	error: PropTypes.string,
	type: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	labelinfo: PropTypes.string,
	isDisabled: PropTypes.bool.isRequired
}

export default FormInputField;