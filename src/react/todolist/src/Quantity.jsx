import * as React from 'react';
import './style.css';

const Card = (props) => {
  const { valueId } = props;
  return <div className="quantity">Quantity - {valueId}</div>;
};

export default Card;
