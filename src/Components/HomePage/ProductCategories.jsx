// ProductCategories.js
import React, { useEffect, useState } from 'react';

const ProductCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Make an API request using the fetch API to get product categories
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCategories(data);
      })
      .catch(error => {
        console.error('Error fetching categories: ', error);
      });
  }, []);

  return (
    <section className="py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="group relative bg-white p-4 shadow-md rounded-md overflow-hidden">
              <img src={category} alt={category} className="w-full h-40 object-cover" />
              <p className="text-lg font-semibold text-gray-800 mt-2 group-hover:text-orange-500 transition-colors duration-300">
                {category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
