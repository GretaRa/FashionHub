import NavigationBar from '../Navbar/NavigationBar';
import Footer from '../Footer';
import { useState, useEffect } from 'react';

import ProductDisplay from './ProductDisplay';

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
          <ProductDisplay products={products} />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ShopPage;
