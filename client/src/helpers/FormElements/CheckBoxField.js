import React from 'react';

const CheckBoxField = ({ name, value, label, handleCheckedBox, checked }) => {
  return (
    <div className="form-group">
      <div className="checkbox">
        <input
          id={name}
          type="checkbox" 
          name={name}
          className="form-control checkbox"
          onChange={handleCheckedBox}
          checked={checked}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    </div>
  );
};


export default CheckBoxField;