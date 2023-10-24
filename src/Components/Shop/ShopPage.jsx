import NavigationBar from '../Navbar/NavigationBar';
import Footer from '../Footer';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductDisplay from './ProductDisplay';
import { useParams } from 'react-router-dom';

const ShopPage = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // const location = useLocation()
  // const { category } = location.state

  const {category} = useParams()
 
  
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
        category === 'all'
          ? setProducts(data)
          :
        setProducts(data.filter((product) => product.category === category));
        setError(null);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category]);

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
