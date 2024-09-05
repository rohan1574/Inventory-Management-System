// src/app/components/LineChart.tsx

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const LineChart = () => {
  const products = useSelector((state: RootState) => state.inventory.products);

  const data = {
    labels: products.map(product => product.name),
    datasets: [
      {
        label: 'Product Quantity Over Time',
        data: products.map(product => product.quantity),
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Product Quantity Trend</h2>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
