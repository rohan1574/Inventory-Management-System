import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: string;
  name: string;
  quantity: number;
}

interface InventoryState {
  products: Product[];
  notifications: string[];
}

const initialState: InventoryState = {
  products: [],
  notifications: [],
};

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    checkInventory: (state) => {
      state.notifications = state.products
        .filter(product => product.quantity <= 5)
        .map(product => `${product.name} is running low! Only ${product.quantity} left.`);
    },
  },
});

export const { addProduct, checkInventory } = inventorySlice.actions;
export default inventorySlice.reducer;
