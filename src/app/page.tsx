// src/app/page.tsx

"use client"; // This directive marks the component as a Client Component

import AddProductForm from '../app/components/AddProductForm';
import ProductList from '../app/components/ProductList';
import Notification from '../app/components/Notification';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { notifyLowStock } from '../app/utils/notificationUtils';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    notifyLowStock(dispatch);
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Inventory Management System</h1>
      <AddProductForm />
      <ProductList />
      <Notification />
    </div>
  );
};

export default Home;
