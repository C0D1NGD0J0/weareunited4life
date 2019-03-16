import React from 'react';
import classnames from 'classnames';

const SelectTagField = ({ name, value, error, info, onChange, options, label, colSize, placeholder }) => {

  const selectOptions = options.map((option, i) =>{
    return <option value={option} key={i}>{option.toUpperCase()}</option>
  });

  return (
  	<div className="form-group">
			<label htmlFor={label}>{label}</label>
    	<select className={classnames('form-control', {'has-error': error})}
        value={value}
        name={name}
        onChange={onChange}>
        <option value="Select Category" disabled>Select Category</option>
        {selectOptions}
      </select>
  	</div>
  );
};

export default SelectTagField;