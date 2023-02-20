import covers from '../../common/covers';

const ProductItem = ({ id, title }) => {
  return (
    <div
      key={id}
      className="md:w-100 md:shadow-xl md:w-[250px] sm:w-[200px] object-cover"
    >
      <a href={`/product/${id}`}>
        <img src={covers[id]} alt={title} className="shadow-md aspect-[2/3]" />
      </a>
    </div>
  );
};

export default ProductItem;
