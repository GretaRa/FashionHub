import Navbar from "../Navbar/Navbar";
import { useState, useEffect } from "react";
import Category from "./Category";

function ProductCategories() {
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${res.status}`
          );
        }
        return res.json();
      })
      .then((res) => setCategory(res))
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
        {category && category.map((cat) => (
          <Category key={cat} name={cat} />
        ))}
        </div>
      </>
    );
};

export default ProductCategories;

// Click cat ->  fetch link of that category? dynamically? 