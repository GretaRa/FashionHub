import { useState, useEffect } from "react";

function Category({name}) { 

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/${name}')
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${res.status}`
          );
        }
        return res.json();
      })
      .then((res) => setData(res))
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  return (
    <button className="p-2 border-black border-2">
      <h3>{name}</h3>
    </button>
  );
}

export default Category;