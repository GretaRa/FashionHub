import { useState, useEffect } from "react";
import ProductDisplay from "./ProductDisplay";
import { useParams } from "react-router-dom";
import fetchItems from "../API/Api";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category);
  const productUrl = selectedCategory
    ? `https://fakestoreapi.com/products/category/${selectedCategory}`
    : 'https://fakestoreapi.com/products';

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchItems(productUrl)
      .then((data) => setProducts(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [productUrl]);

  return (
    <>
      <div className="container mx-auto py-8 min-h-screen flex flex-col">
      <div className="mb-4">
        <label className="text-gray-500">Select Category: </label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's%20clothing">Men's Clothing</option>
          <option value="women's%20clothing">Women's Clothing</option>
        </select>
      </div>
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
