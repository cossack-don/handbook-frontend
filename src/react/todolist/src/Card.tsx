import * as React from 'react';
import './style.css';

const Card = (props) => {
  const { id, name } = props;
  return (
    <li className="card">
      <span className="id">id - {id}</span>
      <span> title - {name}</span>
    </li>
  );
};

export default Card;
