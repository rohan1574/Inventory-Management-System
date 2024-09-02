// src/app/components/AddProductForm.tsx

"use client"; // Ensure this is a Client Component

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/inventorySlice';
import { v4 as uuidv4 } from 'uuid';

const AddProductForm = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addProduct({ id: uuidv4(), name, quantity }));
    setName('');
    setQuantity(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
        required
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
        placeholder="Quantity"
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
