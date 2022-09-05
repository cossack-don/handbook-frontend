import * as React from 'react';
import './style.css';
// components
import BaseButton from './BaseButton';
import Card from './Card';
import BaseInput from './BaseInput';
import ListCards from './ListCard';
import Quantity from './Quantity';
import { arrayCards } from './MockData';

const App = () => {
  const [cards, setCards] = React.useState(arrayCards);
  const [value, setValue] = React.useState('');
  let [valueId, setValueId] = React.useState(arrayCards.length);
  const [isActiveSubmitButton, setIsActiveSubmitButton] = React.useState(true);

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (value === '') {
      return;
    }

    setValueId((valueId = valueId + 1));
    cards.push({ id: valueId, name: value });

    setValue('');
    setIsActiveSubmitButton(true);
  };

  const handlerInput = (e) => {
    if (e.target.value.length >= 1) {
      setIsActiveSubmitButton(false);
    } else {
      setIsActiveSubmitButton(true);
    }
    setValue(e.target.value);
  };

  return (
    <div className="wrapper">
      <h1 className="title">TO DO LIST</h1>

      <form onSubmit={handlerSubmit}>
        <BaseInput
          name="input"
          value={value}
          placeholder="Add card"
          type="text"
          onChange={handlerInput}
        />
        <BaseButton
          type="submit"
          disabled={isActiveSubmitButton}
          text="Add card"
        />
      </form>

      <Quantity valueId={valueId} />
      <ListCards cards={cards} />
    </div>
  );
};

export default App;
