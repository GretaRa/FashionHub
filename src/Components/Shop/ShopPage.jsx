import { useState, useEffect } from "react";
import ProductDisplay from "./ProductDisplay";
import { useParams } from "react-router-dom";
import fetchItems from "../API/Api";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchItems(category)
      .then((data) => setProducts(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
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
