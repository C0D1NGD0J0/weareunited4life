import React from 'react';

const CheckBoxField = ({ name, id, value, label, handleCheckedBox, checked }) => {
  return (
    <div className="form-group">
      <div className="checkbox">
        <input 
          type="checkbox" 
          name={name}
          id={id}
          className="form-control checkbox"
          onChange={handleCheckedBox}
          checked={checked}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    </div>
  );
};


export default CheckBoxField;