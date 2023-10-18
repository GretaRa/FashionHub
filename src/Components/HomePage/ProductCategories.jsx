import { useEffect, useState } from 'react';

const ProductCategories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCategories(data);
        setError(null);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  return (
    <section className="py-44">
        {error === null ? 
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Shop by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category, index) => (
                <div key={index} className="group relative bg-white p-4 shadow-md rounded-md overflow-hidden">
                  <p className="text-lg font-semibold text-gray-800 mt-2 group-hover:text-orange-500 transition-colors duration-300">
                    {category.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>
          </div>
          : null
      }
    </section>
  );
};

export default ProductCategories;
