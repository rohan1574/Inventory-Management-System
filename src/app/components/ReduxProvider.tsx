// src/app/components/ReduxProvider.tsx

"use client"; // This directive makes the component a Client Component

import { Provider } from 'react-redux';
import { store } from '../store/store';

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
