import covers from '../../common/covers';

const ProductItem = ({ id, title }) => {
  return (
    <div key={id} className="md:w-100 md:shadow-xl">
      <a href={`/product/${id}`}>
        <img
          src={covers[id]}
          alt={title}
          className="md:w-[250px] md:h-[350px] sm:w-[200px] sm:h-[300px] object-cover shadow-md"
        />
      </a>
    </div>
  );
};

export default ProductItem;
