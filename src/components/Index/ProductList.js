import products from '../../common/products';
import ProductItem from './ProductItem';

const ProductList = () => {
  return (
    <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-10 md:mb-10 lg:grid-cols-3">
      {products
        .sort((a, b) => b.id - a.id)
        .map(({ id, title }) => (
          <ProductItem key={id} id={id} title={title} />
        ))}
    </div>
  );
};

export default ProductList;
