import React from 'react';

const FormInput = ({ type, name, label, value, onChange, placeholder }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name} value={value} onChange={onChange} placeholder={placeholder}/>
    </div>
  );
};

export default FormInput;
