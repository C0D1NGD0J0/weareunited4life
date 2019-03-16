import React from 'react';
import classnames from 'classnames';

const SelectTagField = ({ name, value, error, info, onChange, options, label, colSize, placeholder }) => {

  const selectOptions = options.map((option, i) =>{
    if(option.hasOwnProperty('name')){
      return <option value={option._id} key={i}>{option.name.toUpperCase()}</option>  
    };
    return <option value={option} key={i}>{option.toUpperCase()}</option>
  });

  return (
  	<div className="form-group">
			<label htmlFor={label}>{label}</label>
    	<select className={classnames('form-control', {'has-error': error})}
        value={label}
        name={name}
        onChange={onChange}>

        <option value={label} disabled>{label}</option>
        {selectOptions}
      </select>
  	</div>
  );
};

export default SelectTagField;