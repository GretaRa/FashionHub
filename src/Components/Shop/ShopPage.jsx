import Navbar from "../Navbar/Navbar";
import { useState, useEffect } from "react";

function ShopPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${res.status}`
          );
        }
        return res.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

    return(
      <>
        <Navbar/>
        {loading && <div>A moment please...</div>}
        {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
        <div>
          <div className=" grid grid-cols-4 gap-10">
            {data &&
              data.map(({ id, title ,image, price, description }) => (
                <div key={id} className="p-2 border-black border-2"> 
                  <img src={image} alt="product image" className="w-60 h-56 object-contain"/>
                  <h3>{title}</h3>
                  <p>{price} €</p>
                  {/* <p className="text-sm text-slate-500">{description}</p> */}
                </div>
            ))}
          </div>
        </div>
      </>
    );
}

export default ShopPage;