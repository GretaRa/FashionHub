import NavigationBar from '../Navbar/NavigationBar';
import Footer from '../Footer';
import { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';

const ShopPage = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setError(null);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <NavigationBar/>
      <div className="container mx-auto py-8 min-h-screen flex flex-col">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {loading && <p>Loading...</p>}
          {error && <p>Oops, something went wrong. Please try again later.</p>}
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md p-4 rounded-md flex flex-col justify-between items-center gap-1">
              <img src={product.image} alt={product.title} className="w-full h-40 object-contain" />
              <h2 className="text-lg font-semibold text-gray-800 mt-2 line-clamp-2">{product.title}</h2>
              <p className="text-gray-600">{product.price.toFixed(2)} €</p>
              <div className='flex flex-col gap-1'>
                <StarRatings
                  rating={product.rating.rate}
                  starDimension="30px"
                  starSpacing="2px"
                  starRatedColor="#fbbf24"
                />
                <button className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 mt-2 rounded-md ">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ShopPage;
