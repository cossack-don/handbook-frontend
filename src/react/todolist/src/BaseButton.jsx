import * as React from 'react';
import './style.css';

const BaseButton = ({ type, disabled, text = 'Title' }) => {
  return (
    <button className="button" type={type} disabled={disabled}>
      {text}
    </button>
  );
};

export default BaseButton;
