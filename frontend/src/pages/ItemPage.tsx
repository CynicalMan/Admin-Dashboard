import React, { useEffect } from 'react';
import ItemsList from '../components/shared/ItemsList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { getItems } from '../api/itemsApi';
import { AppDispatch } from '../redux/store';

const ItemPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status, error } = useSelector((state: RootState) => state.items);

  console.log(error);
  console.log(status);
  
  console.log(items);
  
  
  useEffect(() => {
    if (status === "idle") {
      dispatch(getItems());
    }
  }, [dispatch, status]);

  return (
    <>
      <ItemsList items={items} error={error}  />
    </>
  );
};

export default ItemPage;
