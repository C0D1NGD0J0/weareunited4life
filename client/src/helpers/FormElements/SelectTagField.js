import React from 'react';
import classnames from 'classnames';

const mystyle = {
  width: "70%",
  display: "inline-block",
  marginLeft: "1rem",
  marginTop: "1rem"
};

const SelectTagField = ({ name, value, error, info, onChange, options, label, colSize, placeholder }) => {

  return (
  	<div className="form-group">
			<label htmlFor={label}>{label}</label>
    	<select className={classnames('form-control', {'has-error': error})}
        defaultValue={value}
        name={name}
        onChange={onChange}>
        <option value="" disabled>{value}</option>
      </select>
  	</div>
  );
};

export default SelectTagField;