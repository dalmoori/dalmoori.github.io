import products from '../../common/products';
import ProductItem from './ProductItem';

const ProductList = () => {
  return (
    <div className="grid grid-cols-2 gap-10 mb-10 lg:grid-cols-3">
      {products
        .sort((a, b) => b.id - a.id)
        .map(({ id, title }) => (
          <ProductItem id={id} title={title} />
        ))}
    </div>
  );
};

export default ProductList;
