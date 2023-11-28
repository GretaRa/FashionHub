import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchData from "../API/Api";
import { ShopContext } from "../../App";

const HomeCategories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);

    const categoryUrl = "https://fakestoreapi.com/products/categories";
    fetchData(categoryUrl)
      .then((data) => setCategories(data))
      .catch((error) => setError(error));
  }, []);

  return (
    <section className="py-28">
      {error === null ? (
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className=" bg-white p-4 shadow-md rounded-md overflow-hidden flex items-center justify-center"
              >
                <p className="text-lg font-semibold text-gray-800 mt-2 hover:text-orange-500 transition-colors duration-300 cursor-pointer">
                  {
                    <ShopContext.Provider value={category}>
                    <Link
                      state={{ selectedCategory: category }}
                      to={`/shop/${category}`}
                    >
                      {category.toUpperCase()}
                    </Link>
                    </ShopContext.Provider>
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default HomeCategories;
