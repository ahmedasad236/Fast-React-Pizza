import React from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  function decreaseHandler() {
    dispatch(decreaseItemQuantity(pizzaId));
  }

  function increaseHandler() {
    dispatch(increaseItemQuantity(pizzaId));
  }
  return (
    <div className="flex gap-1 items-center md:gap-3">
      <Button
        clickHandler={decreaseHandler}
        type="round"
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        clickHandler={increaseHandler}
        type="round"
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
