import React, { useEffect } from 'react'
import ItemsList from '../components/shared/ItemsList'
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../api/itemsApi';
import { AppDispatch, RootState } from '../redux/store';
import { toast } from 'react-toastify';

const ItemsListPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status, error } = useSelector((state: RootState) => state.items);

  
  useEffect(() => {
    if (status === "idle") {
      dispatch(getItems())
          .unwrap() 
          .then(() => {
              toast.success(`Items retrieved successfully!`);
          })
          .catch((err: any) => {
              toast.error(`Failed to retrieve items: ${err.message || err || 'Unknown error'}`);
          });
    }
  }, [dispatch, status]);

  return (
    <div className='mx-0 md:mx-auto md:max-w-[calc(100%-5rem)]'>
      <ItemsList items={items} error={error}  />
    </div>
  );
}

export default ItemsListPage