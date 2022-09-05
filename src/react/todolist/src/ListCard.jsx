import * as React from 'react';
import './style.css';
import Card from './Card';

const Form = ({ cards }) => {
  const listCards = cards.map((card) => {
    return <Card id={card.id} name={card.name} />;
  });

  return <ul>{listCards}</ul>;
};

export default Form;
