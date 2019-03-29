import React from 'react';
import classnames from "classnames";
import PropTypes from "prop-types";

const TextAreaField = (props) => {
  const {name, placeholder, value, label, error, onChange, isRequired, row} = props;

  return (
    <div className={classnames("form-group", {"has-error": error})}>
      <label htmlFor={name}>{label} <small className="text-muted">{isRequired}</small></label>
      <textarea
        rows={row}
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

TextAreaField.defaultProps = {
  row: "7"
}

TextAreaField.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	label: PropTypes.string.isRequired,
	error: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	isRequired: PropTypes.string
}

export default TextAreaField;