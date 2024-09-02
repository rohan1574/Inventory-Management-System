import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const ProductList = () => {
  const products = useSelector((state: RootState) => state.inventory.products);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - {product.quantity} in stock
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
