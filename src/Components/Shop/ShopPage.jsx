import { useState } from "react";
import ProductDisplay from "./ProductDisplay";
import { useShopContext } from "../../App";

const ShopPage = () => {
  const {loading, error, category, setSelectedCategory } = useShopContext()
  // const [filteredProducts, setFilteredProducts] = useState(products);
  const [setCategory, setSetCategory] = useState(category);

  // const handleCategoryChange = (selectedCategory) => {
  //   setFilteredProducts(products.filter((product) => product.category === selectedCategory));
  //   console.log(filteredProducts);
  // }

  const handleSelectedCategory = () =>{
    (e) => setSetCategory(e.target.value)
    setSelectedCategory(setCategory)
  }

  console.log('setCategory shop', setCategory);

  return (
    <>
      <div className="container mx-auto py-8 min-h-screen flex flex-col">
        <div className="mb-4">
          <label className="text-gray-500">Select Category: </label>
          <select
            value={setCategory}
            onChange={handleSelectedCategory}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">All</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {loading ? <p>Loading...</p> : <ProductDisplay />}
          {error && <p>Oops, something went wrong. Please try again later.</p>}
        </div>
      </div>
      </>
  );
};

export default ShopPage;
