import React, { useEffect } from 'react'
import ItemsList from '../components/shared/ItemsList'
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../api/itemsApi';
import { AppDispatch, RootState } from '../redux/store';

const ItemsListPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status, error } = useSelector((state: RootState) => state.items);

  
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
}

export default ItemsListPage