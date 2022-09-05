import * as React from 'react';
import './style.css';

const BaseInput = ({
  name,
  value,
  type,
  placeholder = 'placeholder',
  onChange,
}) => {
  return (
    <input
      className="input"
      name={name}
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
    />
  );
};

export default BaseInput;
