import Navbar from "../Navbar/Navbar";
import { useState, useEffect } from "react";
import ProductDisplay from "./ProductDisplay";

function ProductCategories() {
  const [products, setProducts] = useState(null);
  const [categoryName, setCategoryName] = useState('jewelery');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/${categoryName}')
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${res.status}`
          );
        }
        return res.json();
      })
      .then((res) => setProducts(res))
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

    return (
      <>
        <Navbar/>
        {loading && <div>A moment please...</div>}
        {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
        <div>
          <ProductDisplay products={products} />
        </div>
      </>
    );
};

export default ProductCategories;