import { useState, useEffect } from "react";
import ProductDisplay from "./ProductDisplay";
import { useShopContext } from "../../App";
import { useParams, useNavigate } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";

const ShopPage = () => {
  const { loading, error, setSelectedCategory, selectedCategory } =
    useShopContext();

  const [selectedCategoryValue, setSelectedCategoryValue] =
    useState(selectedCategory);

  const { category } = useParams();

  useEffect(() => {
    setSelectedCategory(category);
    setSelectedCategoryValue(category);
  }, [category, setSelectedCategory]);

  const navigate = useNavigate();

  const handleSelectedCategory = (e) => {
    const newValue = e.target.value;
    setSelectedCategoryValue(newValue);
    setSelectedCategory(newValue);

    navigate(`/shop/${newValue}`);
  };

  return (
    <>
      <main className="container mx-auto py-8 min-h-screen flex flex-col">
        <div className="mb-4 mx-2">
          <label className="text-gray-500">Select Category: </label>
          <select
            value={selectedCategoryValue}
            onChange={handleSelectedCategory}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">All</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men&apos;s Clothing</option>
            <option value="women's clothing">Women&apos;s Clothing</option>
          </select>
        </div>
        <div >
          {loading ? <LoadingSpinner /> : 
          (<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <ProductDisplay />
            </div>)}
          {error && <p>Oops, something went wrong. Please try again later.</p>}
        </div>
      </main>
    </>
  );
};

export default ShopPage;
