import StarRatings from "react-star-ratings";
import { useShopContext } from "../../App";

const ProductDisplay = () => {
  const {handleAddItem, products} = useShopContext();
  console.log('products:',products);

  return (
    <>
      {products.map(product => (
        <div
          key={product.id}
          className="bg-white shadow-md p-4 rounded-md flex flex-col justify-between items-center gap-1"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-40 object-contain"
          />
          <h2 className="text-lg font-semibold text-gray-800 mt-2 line-clamp-2">
            {product.title}
          </h2>
          <p className="text-gray-600">{product.price.toFixed(2)} €</p>
          <div className="flex flex-col gap-1">
            <StarRatings
              rating={product.rating.rate}
              starDimension="30px"
              starSpacing="2px"
              starRatedColor="#fbbf24"
            />
            <button onClick={() => handleAddItem(product)} className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 mt-2 rounded-md ">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductDisplay;
