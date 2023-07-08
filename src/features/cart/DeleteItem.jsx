import React from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  function deleteItemHandler() {
    dispatch(deleteItem(pizzaId));
  }
  return (
    <Button
      type="small"
      clickHandler={deleteItemHandler}
    >
      Delete
    </Button>
  );
}

export default DeleteItem;
