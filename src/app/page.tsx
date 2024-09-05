"use client"; // This directive marks the component as a Client Component

import AddProductForm from "../app/components/AddProductForm";
import ProductList from "../app/components/ProductList";
import Notification from "../app/components/Notification";
import BarChart from "../app/components/BarChart";
import PieChart from "../app/components/PieChart";
import LineChart from "../app/components/LineChart";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { notifyLowStock } from "../app/utils/notificationUtils";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    notifyLowStock(dispatch);
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Inventory Management System</h1>
      <AddProductForm />
      <ProductList />
      <Notification />
      <div className="mt-8 ">
        <h2 className="text-xl font-semibold mb-4">Product Charts</h2>
        <div className=" grid grid-cols-3">
          <BarChart />
          <PieChart />
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
