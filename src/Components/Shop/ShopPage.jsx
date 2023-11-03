import { useState, useEffect } from "react";
import ProductDisplay from "./ProductDisplay";
import { useParams } from "react-router-dom";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { category } = useParams();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`,
          );
        }
        return response.json();
      })
      .then((data) => {
        if (category === undefined) {
          setProducts(data);
        } else {
          setProducts(data.filter((product) => product.category === category));
          setError(null);
        }
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
      <div className="container mx-auto py-8 min-h-screen flex flex-col">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {loading && <p>Loading...</p>}
          {error && <p>Oops, something went wrong. Please try again later.</p>}
          <ProductDisplay products={products} />
        </div>
      </div>
    </>
  );
};

export default ShopPage;
