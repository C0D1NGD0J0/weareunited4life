import React from 'react';
import classnames from "classnames";
import PropTypes from "prop-types";

const TextAreaField = (props) => {
  const {name, placeholder, value, label, error, onChange, isRequired} = props;

  return (
    <div className={classnames("form-group", {"has-error": error})}>
      <label htmlFor={name}>{label} <small className="text-muted">{isRequired}</small></label>
      <textarea
        rows="7"
        name={name} 
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form-control"
      />
      {error && (<small className="help-block text-muted">{error}</small>)}
    </div>
  );
};

TextAreaField.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	label: PropTypes.string.isRequired,
	error: PropTypes.string,
	type: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	isRequired: PropTypes.string,
	isDisabled: PropTypes.bool.isRequired
}

export default TextAreaField;